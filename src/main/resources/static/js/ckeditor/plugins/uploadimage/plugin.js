//var editortest;    
//uploadimage插件，add by liliang
CKEDITOR.plugins.add( 'uploadimage', {
    icons: 'uploadimage',
    init: function( editor ) {
		//  改为局部变量add by lishaokuo
		var editortest;
		editortest = editor;
		
		editor.on( 'doubleclick', function( evt ) {
		
		} );			
	
        editor.addCommand( 'insertTimestamp', {
            exec: function( editor ) {
				
				//var iWidth = 500;
				//var iHeight = 300;
				//var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
				//var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
				//var win = window.open("imagetobase64.html", "弹出窗口", "width=" + iWidth + ", height=" + iHeight + ",top=" + iTop + ",left=" + iLeft + ",toolbar=no, menubar=no, scrollbars=no,modal=yes, resizable=no,location=no, status=no,alwaysRaised=1,depended=yes");
				
				showWin(editortest);
            }
        });
		
        editor.ui.addButton( 'uploadimage', {
            label: '上传图片',
            command: 'insertTimestamp',
            toolbar: 'insert'
        });
    }
});

/**
将图片插入到编辑器中。
**/
function setimageToedit(editortest,str){
	
	//var elemente = $( str );
	//editortest.insertElement( elemente );
	//alert("dao");
	//editortest.setData("<p><strong>Initial value.</strong></p>");
	//var  t = '<p>'+str+'</p>';
	//alert(t);
	editortest.insertHtml(str);
	
}

/**
弹出图片选择框
**/
function showWin(editortest){
	
	var modalDiv=document.createElement("div"); //创建一个div,放到body上面用于遮罩，实现模态。
	document.body.appendChild(modalDiv);

	modalDiv.style.width='100%';
	modalDiv.style.height='100%';
	modalDiv.style.backgroundColor="#AAAAAA";
	modalDiv.style.position="fixed";
	modalDiv.style.top='0px';
	modalDiv.style.opacity="0.9";
	modalDiv.style.zIndex='999999';
	
	var selectDiv=document.createElement("div");
	
	selectDiv.style.width='50%';
	selectDiv.style.height='30%';
	selectDiv.style.top='35%';
	selectDiv.style.left='25%';
	selectDiv.style.backgroundColor="white";
	selectDiv.style.position="absolute";
	selectDiv.style.overflow = 'auto';
	selectDiv.style.textAlign='center';
	
	modalDiv.appendChild(selectDiv);
	
	var okButton = document.createElement('input');
    okButton.type="button";
    okButton.value="确定";
	
	okButton.style.marginLeft='30px';
	okButton.style.marginRight='30px';
	okButton.style.marginTop='30px';
	
	okButton.style.width='80px';
	okButton.style.height='30px';
	okButton.onclick=function(){
		
		//检查是否支持FileReader
		if ( typeof(FileReader) === 'undefined' ){ 
			alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！");
			return;
		} 
				
		//获取输入的文件
		var file = fileInput.files[0];
		
		if(typeof(file)  === 'undefined'){
			modalDiv.parentNode.removeChild(modalDiv);
			return;
		}
		
		//判断下类型如果不是图片就返回 去掉就可以上传任意文件   
		if(!/image\/\w+/.test(file.type)){   
				alert("请确保文件为图像类型"); 
				return ; 
		} 
		
			
		/**
		var imagesize = file.size;
		if(imagesize>1024*1000){//1024 = 1k
			alert("文件太大，请限制在1M之内"); 
			return false;
		}
		**/
		
		var reader = new FileReader(); 
		reader.readAsDataURL(file); 
		reader.onload = function(e){
		
		var value64 = '<img id = "demoImage" src="'+this.result+'" alt=""/>';
			setimageToedit(editortest,value64);
			modalDiv.parentNode.removeChild(modalDiv);
		} 
		
	};
	
	
	var cancelButton = document.createElement('input');
    cancelButton.type="button";
    cancelButton.value="取消";
	cancelButton.style.width='80px';
	cancelButton.style.height='30px';
	cancelButton.style.marginTop='30px';
	cancelButton.onclick=function(){
		 modalDiv.parentNode.removeChild(modalDiv);
	};
	
	var fileInput = document.createElement('input');
    fileInput.type="file";
	fileInput.style.width='150px';
	fileInput.style.height='40px';
	fileInput.style.marginTop='30px';
	
	selectDiv.appendChild(fileInput);//添加文件选择输入框
	selectDiv.appendChild(okButton);//确定按钮
	selectDiv.appendChild(cancelButton);//取消按钮
	
	
}


