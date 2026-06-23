/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// %REMOVE_START%
	
	//删除插件 ：'about'   'sourcearea,'  'save,''language,' + //lilaing
	//修改下面的配置，控制加载哪些插件
	config.plugins =
		
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'copyformatting,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
		//'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		//'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		//'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		
		//'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		//'maximize,' +
		//'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		//'preview,' +
		'print,' +
		'removeformat,' +
		//'resize,' +
		
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tableselection,' +
		'tabletools,' +
		//'templates,' +
		'toolbar,' +
		//'undo,' +
		'image2,' +
		'lineheight,' +
		'uploadimage,' +
		'wysiwygarea';
		
		
	//将回车键和shift键调换，缩小行间距
     config.enterMode = CKEDITOR.ENTER_BR;
	 config.shiftEnterMode = CKEDITOR.ENTER_P;
	
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
