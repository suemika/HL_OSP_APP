function createHtml(){
    return `
        <div style="position:relative;left:0;right:0;top:0;bottom:0;width: 100%;height: 100%;font-size: 14px;box-sizing: border-box;">
			<style>
				.f-box{
					box-sizing: border-box;"
				}
                .formula-outer{
                    color:#666;
                }
                .editor-outer{
                    margin-left: 200px;
                    border-left: 1px solid #ddd;
                    height: 100%;
                    position: relative;
                }
                .x-formula-editor{
                    height:50%;
                }
                .x-formula-editor .CodeMirror{
                    border-left:none;
					border-right:none;
					box-sizing: border-box;
					height: 100%!important;
					padding: 26px 2px 4px 2px;
                }
                .x-layout-table-item{
                    width:100%;
                    height: 50%;
                }
                .formula-category .children{
                    height:0px;
                    overflow: hidden;
                }
                .formula-category .children li{
                    padding-left:40px;
                    height:24px;
                    line-height:24px;
                    cursor: pointer;
					font-size: 12px;
                }
                .formula-category .children li:hover{
                    background-color: rgba(36, 138, 249, 0.1);
                    color:rgb(36, 138, 249);
                }
                .formula-category.expand .children{
                    height:auto!important;
                    overflow: auto;
                }
                .formula-category .icon-angleright:before{
                    content: "▶";
                    margin: 0px 5px;
                    color: #6E85A1;
                }
                .title-open .icon-angleright:before{
                    content:"▼";
                }
                .formula-menu {
                    position: relative;
                    float: left;
                    border: 1px solid #e0e0e0;
                    min-width: 150px;
                    width:35%;
                    height:  calc(100% - 120px);
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                }
                .formula-menu .formula-list {
                    position: absolute;
                    top: 30px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    overflow: auto;
					font-size: 13px;
                }
                .formula-menu .formula-list .formula-category .title {
                    cursor: pointer;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                    height: 20px;
                    line-height: 20px;
					font-size: 12px;
                }
                .formula-intro {
                    border: 1px solid #e0e0e0;
                    font-size: 13px;
                    height: calc(100% - 120px);
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
					
                }
				.formula-intro .intro{
					padding: 6px;
				}
				.intro-wrapper{
					position:relative;
					top: 26px;
				}
                .formula-name{
                    color:#761086;
                }
                .fields-list{
                    width:200px;
                    float:left;
                }
                .field{
                    position: relative;
                    height: 30px;
                    line-height: 30px;
                }
                .filed:hover{
                    background-color: #eee;
                }
                .menu-item .menu-capsule {
                    position: absolute;
                    top: 4px;
                    right: 8px;
                    bottom: 4px;
                    text-align: center;
                    line-height: 18px;
                    padding: 0px 8px;
                    border-radius: 10px;
                }
                .menu-capsule.style-blue {
                    color: rgb(36, 138, 249);
                    background: rgba(36, 138, 249, 0.1);
                }
                        .menu-capsule.style-purple {
                    color: rgb(140, 95, 251);
                    background: rgba(140, 95, 251, 0.1);
                }		
                        .menu-capsule.style-green {
                    color: rgb(13, 179, 166);
                    background: rgba(13, 179, 166, 0.1);
                }
                        .menu-capsule.style-yellow {
                    color: rgb(244, 183, 0);
                    background: rgba(244, 183, 0, 0.1);
                }
				.header-label{
					position:relative;
					float:left;
					width:36px;
					height: 28px;
					background-color: #FFFFFF;
					line-height: 28px;
					text-align: left;
					margin: 2px 4px;
					font-size: 12px;
					cursor: default;
					user-select:none;
				}
				.header-item{
					float:left;
					min-width:14px;
					padding: 0 8px;
					height: 26px;
					border: 1px solid #E5E5E5;
					background-color: #fafafa;
					line-height: 26px;
					text-align: center;
					margin: 2px 4px;
					font-size: 12px;
					cursor: pointer;
					border-radius:4px;
					user-select:none;
				}
				.header-item:hover{
					background-color: #e0e0e0;
					border: 1px solid #E1E1E1;
				}
				.flow-exp-filed-i001{/* 大于 */
					background: #FFEDED!important;;
					color: #FF3333!important;;
				}
				.flow-exp-filed-i002{/*小于*/
					background: #FFEDED!important;;
					color: #FF3333!important;;
				}
				.flow-exp-filed-i003{/*等于*/
					background: #FFEDED!important;;
					color: #FF3333!important;;
				}
				.flow-exp-filed-i004{/*不等于*/
					background: #FFEDED!important;;
					color: #FF3333!important;;
				}
				.flow-exp-filed-i005{/*大于等于*/
					background: #FFEDED!important;;
					color: #FF3333!important;;
				}
				.flow-exp-filed-i006{/*小于等于*/
					background: #FFEDED!important;;
					color: #FF3333!important;;
				}
				.flow-exp-filed-i007{/*且*/
					background: #DBF8F6!important;;
					color: #00B9AD!important;;
				}
				.flow-exp-filed-i008{/*或*/
					background: #DBF8F6!important;;
					color: #00B9AD!important;;
				}
				.flow-exp-filed-i009{/*左括号*/
					background: #FFF6ED!important;
					color: #FF9933!important;
				}
				.flow-exp-filed-i010{/*右括号*/
					background: #FFF6ED!important;
					color: #FF9933!important;
				}
				.flow-exp-filed-i011, .flow-exp-filed-i011 input{/*数字*/
					background: #ECF9ED!important;;
					color: #00840D!important;;
					text-decoration: underline;
				}
				.flow-exp-filed-i012, .flow-exp-filed-i012 input{/*文本*/
					background: #F5F3FF!important;;
					color: #5A3DC4!important;;
					text-decoration: underline;
				}
				.flow-exp-filed-i013{/*true*/
					background: #ecf5f6!important;;
					color: #4e9f9c!important;;
				}
				.flow-exp-filed-i014{/*false*/
					background: #ecf5f6!important;;
					color: #4e9f9c!important;;
				}
				.flow-exp-filed-i015{/*null*/
					background: #ecf5f6!important;;
					color: #4e9f9c!important;;
				}
				.flow-exp-filed-i016{/*逗号*/
					background: #FFF8DB!important;
					color: #C78B00!important;
				}
				.flow-exp-filed-function{/*函数*/
					background: #EEF4FF!important;;
					color: #163E84!important;;
				}
				.flow-exp-filed-info{/*变量*/
					background: #EAF3FC!important;;
					color: #1677DC!important;;
				}
				.flow-exp-filed-i101{/*加号*/
					background: #F6F1F1!important;
					color: #874949!important;
				}
				.flow-exp-filed-i102{/*减号*/
					background: #F6F1F1!important;
					color: #874949!important;
				}
				.flow-exp-filed-i103{/*乘号*/
					background: #F6F1F1!important;
					color: #874949!important;
				}
				.flow-exp-filed-i104{/*除号*/
					background: #F6F1F1!important;
					color: #874949!important;
				}
				.flow-exp-filed-i105{/*in*/
					background: #F6F1F1!important;
					color: #874949!important;
				}
				.flow-exp-filed-i106{/*not in*/
					background: #F6F1F1!important;
					color: #874949!important;
				}
				.flow-exp-filed-i107{/*非*/
					background: #FFEEFE!important;
					color: #D400CA!important;
				}


				/* 用于计算宽度的隐藏 span */
				#width-calculator {
					position: absolute;
					visibility: hidden;
					white-space: pre; /* 保持空格宽度一致 */
					font-size: 12px;
					font-weight: bold;
					font-family: "黑体", "Heiti SC", "Blod";
					}
				.f-input{
					caret-color: red; /* 设置光标颜色为红色 */
					font-weight: bold;
					font-family: "黑体", "Heiti SC", "Blod";
					height: 22px;
				}
				.f-input:focus {
					outline: none;
					}
				.formula-category .icon-angleright:before{
					font-size: 12px!important;
				}
				.cm-field {
					height: 20px;
					line-height: 20px;
					display:inline-block;
				}
				.cm-field-name{
					user-select:none;
					margin: 3px 1px!important;
				}
				.CodeMirror-code{
					padding-left: 1px;
				}
				.CodeMirror-selected{
					border:1px dashed #1da82e!important;
					background-color:#fff!important;
				}
				.formula-title{
					height: 26px;
					line-height: 26px;
					padding: 0 6px;
					background: #eee;
					font-size: 12px;
					left: 1px;
					position: absolute;
					right: 1px;
					user-select:none;
				}
				.intro-txt{
					color:#555!important;
					font-size: 12px!important;
				}
				.formula-head{
					background-color:#eee;
					font-size: 12px;
					height: 26px;
					line-height: 26px;
					user-select:none;
					left:0px;
					right:0px;
				}
				.formula-item{
					user-select:none;
				}
				.exp-show-field{
					position:absolute;
					left:0px;
					top:0;
					bottom:0;
					width:100px;
					background:#eee;
					line-height: 60px;
    				padding: 0 10px;
					font-size: 12px!important;
					user-select:none;
				}
				.exp-show-value{
					position:absolute;
					top:0;
					bottom:0;
					right:0;
					left:100px;
					padding:10px;
					color:#555;
					font-size: 12px;
					overflow-y:auto;
				}
				.highlight-bracket-content{
					background-color:red;
				}
				.formula-action{
					height: 22px;
					width: 22px;
					line-height: 20px;
					text-align:center;
					margin:0 2px;
					background-color:#fafafa;
					display:inline-block;
					float:right;
					cursor: pointer;
					border: 1px solid #E5E5E5;
					border-radius: 4px;
					color: #737373;
				}
				.formula-action:hover{
					background-color:#dadada;
					color: #474747;
				}
				.title-open + .children{
					height:auto!important;
				}
				.hidden{
					display:none;
				}
			</style>
			<div class="header-content" style="position:absolute;left:0;right:0;top:0px;height:28px;">
				<div class="header-label">插入：</div>
				<div class="header-item" iid="i-001">></div>
				<div class="header-item" iid="i-002"><</div>
				<div class="header-item" iid="i-003">==</div>
				<div class="header-item" iid="i-004">!=</div>
				<div class="header-item" iid="i-005">>=</div>
				<div class="header-item" iid="i-006"><=</div>
				
				<div class="header-item" iid="i-009">(</div>
				<div class="header-item" iid="i-010">)</div>
				<div class="header-item" iid="i-101">+</div>
				<div class="header-item" iid="i-102">-</div>
				<div class="header-item" iid="i-103">x</div>
				<div class="header-item" iid="i-104">÷</div>
				<div class="header-item hidden" iid="i-105">In</div>
				<div class="header-item hidden" iid="i-106">NotIn</div>
			</div>
			<div class="header-content" style="position:absolute;left:0;right:0;top:32px;height:28px;">
				<div class="header-label"></div>
				<div class="header-item" iid="i-007">且</div>
				<div class="header-item" iid="i-008">或</div>
				<div class="header-item" iid="i-107">非</div>
				<div class="header-item" iid="i-011">数字</div>
				<div class="header-item" iid="i-012">文本</div>
				<div class="header-item" iid="i-013">TRUE</div>
				<div class="header-item" iid="i-014">FALSE</div>
				<div class="header-item" iid="i-015">NULL</div>
				<div class="header-item" iid="i-016">,</div>
				
			</div>
			<div class="main-content" style="position:absolute;left:0;right:0;top:65px;bottom:0px;">
				<span id="width-calculator"></span>
				<div style="position:absolute;left: 2px;right: 2px;top:0px;bottom:2px;border:1px solid #E2E2E2">
					<div style="position: absolute;top:0px;bottom:225px;left:0px;right:0px;">
						<div style="position:relative;width: 100%;height: 100%;" class="x-formula-editor">
					
						</div>
						
					</div>
					<div style="position: absolute;height:60px;bottom:165px;left:0px;right:0px;">
						<div style="position:relative;width: 100%;height: 100%;" class="x-formula-editor1">
							<span class="exp-show-field f-box">公式预览:</span>
							<span class="exp-show-value f-box"></span>
						</div>
						
					</div>
					<div style="position: absolute;bottom:0px;height:164px;left:0px;right:0px;border-top: 1px solid #e2e2e2;">
						<div style="position:absolute;left:0;top:0;bottom:0;width:210px;border-right: 1px solid #e2e2e2;">
							<div class="formula-menu" style="width: 100%;height: 100%;" >
								<div class="formula-title">
									变量
								</div>
								<ul class="formula-list" id="flow-info">
									
								</ul>
							</div>
							
						</div>
						<div style="position:absolute;left:210px;top:0;bottom:0;width:210px;border-right: 1px solid #e2e2e2;">
							<div class="formula-menu" style="width: 100%;height: 100%;" >
								<div class="formula-title">
									函数
								</div>
								<ul class="formula-list" id="flow-func">
									
									
								</ul>
							</div>
						</div>
						<div style="position:absolute;right:0;top:0;bottom:0;left:420px;">
							<div class="formula-intro" style="width: 100%;height: 100%;">
								<div class="formula-title">
									描述
								</div>
								<ul class="intro-wrapper default">
									<li class="intro"><span class="intro-txt">暂无描述</span></li>
								</ul>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
    `
}