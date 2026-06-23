window.reactEnv = {
    // 静态资源文件相对路径
    // STATIC_BASE: 'http://10.20.31.108:30487/OSPSpringService',
    // 服务器接口相对路径
    // SERVER_ADDR: 'http://10.20.31.108:30487/OSPSpringService',

    ospplatform: 'mobileweb',
    /**
     * 分离部署，有些后端无法往前端设置cookie
     */
    singleDeploy: false,
    /**
     * 使用移动app的登陆页面
     */
    EnableAppLogin: false,
    /**
     * 使用移动端提供的配置数据
     */
    EnableAppCongfig: false,
    /**
     * 支持离线访问
     */
    MobileAppOfflineSupport: false,
    /**
     * 审批中心支持kkfile预览附件
     */
    MobileAppPreviewFileOnline: false,
    /**
     * 审批中心支持PDFJS预览附件
     */
    MobileAppPreviewFileByPDFJS: false,
    /**
     * 移动端关闭校验token,默认校验 true:关闭  false:开启
     */
    MobileAppCloseCheckToken: false,
    /**
     * 输入法弹出隐藏主页底部导航栏
     */
    HideTabBarByKeyboardState: false,
    SYS_ID: "MHZX",
    useEnvCache: "1",
    /**
     * 硬编码审批已办是否加载制单节点单据
     */
    LoadStartTask: false,
    /**
     * 移动审批任务中心加载已办结单据,审批主页显示已办结单据分类
     */
    LoadHistoryTask: false,
    HistoryTaskPastDate: 30,
    APP_PO: {
        // 可通过配置中心配置， 功能同 window.GWTPO
        International: 'zh',
        Country: 'CN',
        MultiLanguage: 'false', //是否启用多语言，在保存表单时生成不同的json文件
        MenuMultiLanguage: 'false', // 是否启用菜单多语言
        // DBNO: "OSP_DB01",
        // DataBaseName: "OSP_DB01",
    },
    // 打开formPlay表单调接口获取token所需要字段
    formPlay: {
        ignoreToken: '0', // 1 忽略token检查
        clientId: 'TOKENTEMP',
        clientSecret: 'TOKENTEMPSECRET'
    },
    OAuth: {
        //是否仅通过鉴权登录,开启后,登录页面登录按钮无法点击
        singleOAuthLogin: false,
        //bindType 未查询到绑定关系,通过username:用户名密码绑定/phoneNumber:手机号验证码绑定
        //绑定提示,检测到未绑定时,可自定义提示内容,会在三方登录接口回调后,返回code 1 2时弹出toast提示
        // bindTip: '',
        //企业微信配置
        WeChatEnterpriseConfig: {
            oauthUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
            // appid: 'wwb3007e0b7b653028',
            // agentid: '1000019',
            // clientSecret: 'K36AD9-_153JGOgoyoHTrff-k5OEPXcf12-Fwhpr4js',
            scope: 'https://developer.work.weixin.qq.com/document/path/91120',  //snsapi_base：静默授权，可获取成员的基础信息（UserId与DeviceId）； snsapi_privateinfo：手动授权，可获取成员的详细信息，包含头像、二维码等敏感信息。
            socialType: '30', //后台三方认证，企业微信为30
            bindType: 'username'
        },
        WeChatMPConfig: {
            //scope:'snsapi_base',  //snsapi_base：静默授权，可获取成员的基础信息（UserId与DeviceId）； snsapi_privateinfo：手动授权，可获取成员的详细信息，包含头像、二维码等敏感信息。
            socialType: '31', //后台三方认证，微信公众号为31
            bindType: 'phoneNumber'
        },
        SKMiniProgram: {
            socialType: '34', //后台三方认证，微信公众号为31
            oauthType: 'sign'
        }
    },
    //审批中心配置集合
    TaskCenter: {
        //单据附件
        BillAffix: {
            // downloadServerID: 'ZJXTKKFileDownloadAddress',      // 配置，则附件下载地址会取配置中心EAIServer配置的地址
            // previewServerID:'ZJXTKKFileAccessIntranetAddress'   // 配置，则附件预览地址会取配置中心EAIServer配置的地址
            // customPreviewFile: true, // 配置，则附件预览地址会走自定义预览地址
        },
        //审批操作是否走脚本校验
        MobileCheckTaskApproval: false,
        checkFlowArray: ["allFlow"],
        //单据审批相关
        BillApprove: {
            //单据审批弹窗默认意见
            //同意
            submitOpinion: '',
            //退回
            rollbackOpinion: '',
            //取回
            retakeOpinion: ''
        },
        //单据头最大行数，当大于此行数时，折叠“显示更多”
        defaultMaxItems: 5,
        //单据头处于折叠状态时，显示行数
        defaultShowItems: 3,
        //显示单据流程步骤信息
        showBillFlowInfo: false,
        //我的单据相关配置
        TaskMyBill: {
            //隐藏我的单据分类，默认未提交unsubmitted、已提交submitted、已办结completed
            hideMyBillCategory: []
        }
    },
    // error消息框自动关闭的延时，单位秒
    // ErrorMessageBoxDuration: 3,
    // success消息框自动关闭的延时
    // SuccessMessageBoxDuration: 3,
    // info消息框自动关闭的延时
    // InfoMessageBoxDuration: 3,
    // warning消息框自动关闭的延时
    // WarningMessageBoxDuration: 3,
    // warn消息框自动关闭的延时
    // WarnMessageBoxDuration: 3,
};

window.getRootUrl = function () {
    var origin = window.location.origin;
    var pathName = window.location.pathname;
    return origin + '/' + pathName.split('/')[1];
};

window.getLoadingImage = function () {
    var origin = window.location.origin;
    var pathName = window.location.pathname;
    return origin + pathName + '/loading.gif';
};
