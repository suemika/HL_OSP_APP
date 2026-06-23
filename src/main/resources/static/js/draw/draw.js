//整个svg画布
var SVG_NS = 'http://www.w3.org/2000/svg';
var PointView = {
        draw: draw
    }
window.PointView = PointView;
function draw(element,dataJson,func){
    //createElementNS方法可创建带有指定命名空间的元素节点
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
	if(element == null || element==undefined){
		return;
	}
    element.appendChild(svg);
    // 添加公共小图标标签
    var defs = document.createElementNS(SVG_NS, "defs");
    svg.appendChild(defs)
	
	if(dataJson==null||dataJson==undefined){
		return;
	}
	dataJson = JSON.parse(dataJson); 
    // 取出所有坐标点
    const points = dataJson.points;
    // 取出背景图片，并渲染
    const imgUrl = dataJson.backgroundImgUrl;
    var image = document.createElementNS(SVG_NS, "image");
    image.setAttribute("x", 0);
    image.setAttribute("y", 0);
    image.setAttribute("width", "100%");
    image.setAttribute('height', "100%")
    image.setAttribute("preserveAspectRatio","none") 
    image.href.baseVal = imgUrl;
    svg.appendChild(image);
    // 遍历所有坐标点并渲染
	if( points == null || points==undefined){
		return;
	}
    points.map((point,index)=>{
        // 取出icon，生成标签后添加到defs上
        var pattern = document.createElementNS(SVG_NS, "pattern");
        let id = "pattern"+index;
        pattern.setAttribute("id",id)
        pattern.setAttribute("width","100%")
        pattern.setAttribute("height","100%")
        pattern.setAttribute("patternContentUnits","objectBoundingBox")
        var icon = document.createElementNS(SVG_NS, "image");
        icon.setAttribute("width",1)
        icon.setAttribute("height",1)
        icon.href.baseVal = point.icon;
        pattern.appendChild(icon)
        defs.appendChild(pattern);
        // 通过坐标点渲染水滴
        var path = document.createElementNS(SVG_NS, "path");
        let color = point.color;
        let x = point.x-10;
        let y = point.y-5;
        let d = `M${x} ${y} a 20 20 0 1 1 20 0 L${x+10} ${y+5}  Z `
        path.setAttribute("d",d)
        path.setAttribute("fill",color)
        svg.appendChild(path);
        // 通过坐标点生成圆点覆盖到水滴上
        var circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y-22);
        circle.setAttribute("r", 15)
        circle.setAttribute("fill", `url(#${id})`);
        circle.setAttribute("style","cursor: pointer;")
		if(func!=null&&func!=undefined){
			circle.onclick=()=>{
				func.call(point);
			};
		}
        svg.appendChild(circle);
    })
}



