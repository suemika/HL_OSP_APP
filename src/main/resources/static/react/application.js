/**
 * React 的环境变量
 */
window.reactEnv = {
    // 静态资源文件相对路径
    // STATIC_BASE: 'http://127.0.0.1:8080/OSPSpringService',
    // 服务器接口相对路径
    // SERVER_ADDR: 'http://127.0.0.1:8080/OSPSpringService',
    // 登录界面相关配置
    LOGIN: {
        logo: 'react/images/login/logo_title.svg', //logo_title.svg",
        logo_title_zh_CN: '华鲁装备营销系统',
        logo_title_zh_TW: '華魯裝備營銷系統',
        logo_title_zh_HK: '華魯裝備營銷系統',
        logo_title_en_US: 'Hualu Equipment Marketing System',
        login_bkg: 'react/images/login/loginAppBg.png',
        login_li01: 'react/images/login/0-618x406.jpg',
        login_li02: 'react/images/login/1-618x406.jpg',
        login_li03: 'react/images/login/2-618x406.jpg',
        login_li04: 'react/images/login/3-618x406.jpg',
        login_li05: 'react/images/login/4-618x406.jpg',
        isCarousel: true, // 登录页banner是否轮播，默认轮播
        accountLoginShow: true, // 是否显示账户信息登录
        scanLoginShow: true, // 是否显示扫码登录
        forgetPassShow: true, // 是否显示忘记密码
        smsLoginShow: false, // 是否显示短信验证码登录
        mailLoginShow: false, // 是否显示邮箱验证码登录
        codeInvalidTime: 60, // 验证码失效时间，单位：秒(s)
        loginIcon: {
            width: 35,
            height: 35,
            color: 'rgba(0, 0, 0, 0.85)',
            fontSize: '22px'
        }, // logo尺寸
        supportTitle: {
            zh_CN: '技术支持：石横特钢集团有限公司 版权所有 数智中心 提供技术支持',
            zh_TW: '技術支持：石橫特鋼集團有限公司 版權所有 數智中心 提供技術支持',
            zh_HK: '技術支持：石橫特鋼集團有限公司 版權所有 數智中心 提供技術支持',
            en_US: 'Technical support: Shiheng Special Steel Group Co., Ltd. All rights reserved. Digital Intelligence Center provides technical support'
        },
        loginFor4A: false,
        menu: [
            // {
            //     type: 'appdownload',
            //     config: {
            //         caption: '扫码下载APP'
            //     },
            //     downloadConfig: {
            //         icon: 'react/images/osp.jpg',
            //         Android: {
            //             downloadUrl: 'http://192.168.2.211:8080/PortalServer/apk/WebApp.apk',
            //             downloadName: 'test.apk'
            //         },
            //         iOS: {
            //             downloadUrl: 'http://127.0.0.1:8080/OSPSpringService/test.apk',
            //             downloadName: 'test.apk'
            //         }
            //     }
            // },
            // {
            //     type: 'themesetting',
            //     config: {
            //         caption: '主题设置'
            //     }
            // },
            // {
            //     type: 'divider', // 分割线
            // },
            {
                type: 'lang'
            }
        ],
        // 密码框是否显示明文切换按钮
        passwordVisibilityToggle: false,
        // 自定义登录
        customLogin: {
            enable: false
        },
        //登录扩展
        extendAuth: false,
        // 显示记住密码
        rememberMe: false,
        // 显示注册并配置点击注册执行方法
        // register: {
        //     showRegister: false,
        //     registerTitle: '注册账号',
        //     registerFuntion: function () {
        //         window.open('/');
        //     }
        // }
        login4APage: {
            type: '',
            loginLeftStyle: {
                width: '450px'
            },
            loginFormStyle: {
                width: '430px',
                height: '420px',
                borderRadius: '10px'
            },
            loginAccountStyle: {
                padding: '6px 20px',
                height: '26px',
                lineHeight: '26px',
                color: 'rgba(0, 0, 0, 0.55)'
            },
            loginSloganStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '24px'
            }
        },
        // ERP登录页个性化配置-英文en_US
        loginERP_en_US: {
            login_bkg: 'react/images/login/tinyLoginBg.jpg',
            bannerConfig: {
                title: 'Provide in-depth and specific solutions for numerous fields',
                describe: 'Click to learn more about Pansoft ERP products',
                url: 'http://www.pansoft.com/'
            },
            moreLink: [
                { name: 'About Us', code: 'aboutUs', url: 'http://www.pansoft.com/about' },
                { name: 'Contact Us', code: 'contactUs', url: 'http://www.pansoft.com/about#5' },
                { name: 'News Updates', code: 'newsUpdate', url: 'http://www.pansoft.com/news' },
                { name: 'Software Product', code: 'softwareProduct', url: 'http://www.pansoft.com/product#soft' },
                { name: 'Cloud Services', code: 'cloudService', url: 'http://www.pansoft.com/cloudservice' },
                { name: 'Domain Solutions', code: 'domainSolution', url: 'http://www.pansoft.com/product#domain' },
                { name: 'Classic Case', code: 'typicalCase', url: 'http://www.pansoft.com/product#case' },
                { name: 'Service Support', code: 'serviceSupport', url: 'http://www.pansoft.com/support' }
            ],
            copyright: 'Copyright © 2001-2023 Shiheng Special Steel Group Co., Ltd. All rights reserved'
        },
        // ERP登录页个性化配置-简体中文zh_CN
        loginERP_zh_CN: {
            login_bkg: 'react/images/login/tinyLoginBg.jpg',
            bannerConfig: {
                title: '为众多领域提供深入的特定方案',
                describe: '点击详细了解普联ERP产品',
                url: 'http://www.pansoft.com/'
            },
            // slogan: '合作创造财富\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0创新谋求发展',
            moreLink: [
                { name: '关于我们', code: 'aboutUs', url: 'http://www.pansoft.com/about' },
                { name: '联系我们', code: 'contactUs', url: 'http://www.pansoft.com/about#5' },
                { name: '新闻动态', code: 'newsUpdate', url: 'http://www.pansoft.com/news' },
                { name: '软件产品', code: 'softwareProduct', url: 'http://www.pansoft.com/product#soft' },
                { name: '云服务', code: 'cloudService', url: 'http://www.pansoft.com/cloudservice' },
                { name: '领域解决方案', code: 'domainSolution', url: 'http://www.pansoft.com/product#domain' },
                { name: '典型案例', code: 'typicalCase', url: 'http://www.pansoft.com/product#case' },
                { name: '服务支持', code: 'serviceSupport', url: 'http://www.pansoft.com/support' }
            ],
            copyright: '版权所有 © 2001- 2023 普联软件股份有限公司 · 鲁ICP备13012779号-5'
        },
        // ERP登录页个性化配置-繁体中文zh_HK
        loginERP_zh_HK: {
            login_bkg: 'react/images/login/tinyLoginBg.jpg',
            bannerConfig: {
                title: '為眾多領域提供深入的特定方案',
                describe: '點擊詳細瞭解普聯ERP產品',
                url: 'http://www.pansoft.com/'
            },
            // slogan: 'Collaborate to create wealth, innovate and seek development',
            moreLink: [
                { name: '關於我們', code: 'aboutUs', url: 'http://www.pansoft.com/about' },
                { name: '聯繫我們', code: 'contactUs', url: 'http://www.pansoft.com/about#5' },
                { name: '新聞動態', code: 'newsUpdate', url: 'http://www.pansoft.com/news' },
                { name: '軟體產品', code: 'softwareProduct', url: 'http://www.pansoft.com/product#soft' },
                { name: '雲服務', code: 'cloudService', url: 'http://www.pansoft.com/cloudservice' },
                { name: '領域解決方案', code: 'domainSolution', url: 'http://www.pansoft.com/product#domain' },
                { name: '典型案例', code: 'typicalCase', url: 'http://www.pansoft.com/product#case' },
                { name: '服務支援', code: 'serviceSupport', url: 'http://www.pansoft.com/support' }
            ],
            copyright: '版權所有 © 2001- 2023 普聯軟件股份有限公司 · 魯ICP備13012779號-5'
        },
        // ERP登录页个性化配置-繁体中文zh_TW
        loginERP_zh_TW: {
            login_bkg: 'react/images/login/tinyLoginBg.jpg',
            bannerConfig: {
                title: '為眾多領域提供深入的特定方案',
                describe: '點擊詳細瞭解普聯ERP產品',
                url: 'http://www.pansoft.com/'
            },
            // slogan: '合作創造財富創新謀求發展',
            moreLink: [
                { name: '關於我們', code: 'aboutUs', url: 'http://www.pansoft.com/about' },
                { name: '聯繫我們', code: 'contactUs', url: 'http://www.pansoft.com/about#5' },
                { name: '新聞動態', code: 'newsUpdate', url: 'http://www.pansoft.com/news' },
                { name: '軟體產品', code: 'softwareProduct', url: 'http://www.pansoft.com/product#soft' },
                { name: '雲服務', code: 'cloudService', url: 'http://www.pansoft.com/cloudservice' },
                { name: '領域解決方案', code: 'domainSolution', url: 'http://www.pansoft.com/product#domain' },
                { name: '典型案例', code: 'typicalCase', url: 'http://www.pansoft.com/product#case' },
                { name: '服務支援', code: 'serviceSupport', url: 'http://www.pansoft.com/support' }
            ],
            copyright: '版權所有 © 2001- 2023 普聯軟件股份有限公司 · 魯ICP備13012779號-5'
        }
    },
    // 浏览器页签title
    TITLE: '华鲁装备营销系统',
    // 浏览器页签icon
    ICON: 'react/images/login/logo_title.svg',
    // 页面Loading图
    waitingImg: 'react/images/loading.gif',
    // 应用界面相关配置
    APP: {
        logo: 'react/images/login/logo_title.svg', // react/images/logo_title.svg
        logoSize: {
            height: 35
        },
        openUrl: '', // url不配置时，默认push到首页
        openTarget: '', // 没配置url时，此属性不生效；_self : 浏览器当前页签刷新，_blank：浏览器新页签跳转
        logoTitleColor: '#0081cc',
        logoTitleFontSize: '22px',
        logo_title_zh_CN: '华鲁装备营销系统',
        logo_title_zh_TW: '華魯裝備營銷系統',
        logo_title_zh_HK: '華魯裝備營銷系統',
        logo_title_en_US: 'Hualu Equipment Marketing System',
        error: 'react/images/404.svg',
        error401: 'react/images/401.svg',
        picture1: 'react/images/app/1.jpg',
        picture2: 'react/images/app/2.jpg',
        picture3: 'react/images/app/3.jpg',
        picture4: 'react/images/app/4.jpg',
        picture5: 'react/images/app/5.jpg',
        picture6: 'react/images/app/6.jpg'
        // menu: [
        //     {
        //         type: 'appdownload',
        //         downloadUrl: 'http://localhost:3000/#/login',
        //         downloadName: 'apk',
        //         config: {
        //             caption: '移动端下载'
        //         }
        //     },
        //     {
        //         type: 'themesetting',
        //         config: {
        //             caption: '主题设置'
        //         }
        //     },
        //     {
        //         type: 'divider', // 分割线
        //     },
        //     {
        //         type: 'lang',
        //     },
        // ],
        // topMenu: [
        //     {
        //         config: {
        //             caption: '切换业务域',
        //             formID: 'sys_bss',
        //             formType: 'ReactForm',
        //             displayType: 'DropDown'
        //         },
        //         path: 'sys_bss',
        //     }
        // ]
        // logoClickFunction: function () {
        //     window.location.href = '/';
        // }
        // header: {
        //     backgroundImage: ['react/images/login/0-618x406.jpg', 'react/images/login/1-618x406.jpg'],
        //     selectedBgindex: 0
        // }
    },
    // React应用模式
    runMode: 'react',
    // 是否加载GWT相关的js, '1'：加载， '0'：不加载
    loadGWTJS: '0',
    // 是否启用tab页签
    keepalive: true,
    // tab页签右键是否显示设计表单
    showDesignerFormOnMenu: '1',
    // tab页签右键是否显示刷新表单
    showRefreshFormOnMenu: '1',
    // 多语言配置
    langConfig: {
        // 登录页默认图标
        langLoginIcon: 'react/images/lang/default-black.svg',
        // 应用里默认图标
        langWebIcon: 'react/images/lang/default.svg',
        // 多语言类别
        langType: [
            {
                title: 'zh_CN',
                icon: 'react/images/lang/ch.png'
            },
            {
                title: 'zh_TW',
                icon: 'react/images/lang/ch.png'
            },
            {
                title: 'zh_HK',
                icon: 'react/images/lang/ch.png'
            },
            {
                title: 'en_US',
                icon: 'react/images/lang/US.png'
            }
        ],
        // 多语言名称
        langTitle_zh_CN: ['简体中文', '繁体中文', '英语'],
        langTitle_en_US: ['Chinese', 'HK', 'English'],
        langTitle_zh_TW: ['簡體中文', '繁體中文', '英語'],
        langTitle_zh_HK: ['簡體中文', '繁體中文', '英語'],
        // 应用多语言是否显示图标
        showIcon: false
    },
    // 系统SYS_ID， React中调接口时用到
    SYS_ID: 'MHZX',
    SYS_MC: '门户中心',
    // 前台代码中接口调用的超时阈值，单位毫秒； osp-react-base：request
    RequestTimeOut: 100000,
    MENU: {
        mode: 'TreeMenu', // 默认树级：TreeMenu 级联：CascadeMenu 平铺：TileMenu 平铺展示下拉和多级：TileMenuUpgrade 卡片展示末级菜单：CardMenu
        // 是否加载老版菜单结构
        LoadOldMenu: false,
        // 菜单拖拽时的最大和最小尺寸，单位px
        menuMinWidth: '200',
        menuMaxWidth: '500',
        // 默认是否隐藏
        defaultHideMenu: false,
        // 是否根据bsuser表配置控制菜单显隐
        isHideMenuByUserInfo: false,
        // 默认是否折叠
        defaultCollapsedMenu: false,
        // 左侧菜单样式
        leftMenuStyle: {
            // 暂时只支持字体大小
            // fontSize: '16px',
        },
        // 平铺菜单个性化配置
        TileMenu: {
            // 服务目录宽度
            catalogueWidth: 172,
            // 服务目录是否显示图标
            catalogueIcon: false,
            // 服务目录背景色
            catalogueBackgroundColor: '#f5f5f5',
            // 平铺菜单背景图片
            backgroundImage: 'react/images/app/background.png',
            // 字体大小
            fontSize: '14px',
            // 字体默认颜色
            fontColor: 'rgba(0, 0, 0, 0.85)',
            // 点击固定菜单（非明细菜单，开启后点击即可固定菜单展开，此时鼠标划过不再切换菜单）
            clickFixedMenu: false,
            //固定菜单图标
            fixedMenuIcon: ''
        },
        //TileMenuUpgrade菜单个性化配置
        TileMenuUpgrade: {
            // 界面宽度，若调低右侧会留白
            tileMenuUpgradewidth: '100%'
            // tileMenuUpgradeRow:true,//菜单是否横向显示横向显示仅支持四级
            // tileMenuUpgradeshowArrow:true,//隐藏折叠按钮隐藏之后不可点击下拉
            // tileMenuUpgradeRowImage:'react/images/app/background.png'//左侧划过图标;在菜单为横向模式时使用
            // 是否展示为三级菜单，效果相当于默认效果将第二级服务目录去掉，该模式暂时不支持原版四级菜单，请自行调整为三级
            // tileMenuUpgradeTopTreeMenuHideShadow: true,
            // 右侧drawer宽度，若调低可以漏出下面界面
            // tileMenuUpgradeDrawerWidth: '100%'
        },
        CardMenu: {
            cardMenuDisplayType: '', //卡片菜单展示类型，默认打开页签，配置drawer时打开抽屉
            // 卡片菜单图标大小
            cardMenuIconSize: 45
        },
        TopTreeMenu: {
            // 左侧菜单的展示方式
            mode: '',
            //顶部菜单样式
            topStyle: {
                // color: 'yellow'
            },
            //顶部菜单选中样式
            topStyleSelected: {
                // color: 'red'
            }
        },
        type: '', // application: 多应用模式
        env: '' // development: 开发态  production: 运行态
    },
    // 启用锁屏(鼠标无操作或者无移动，默认30分钟后显示锁屏，该配置尽量不要和token失效配置一起启用)
    lockScreen: {
        show: false,
        // 多长时间无操作显示锁屏（单位：毫秒）
        timeOut: 1800000
    },
    // 前端检查，鼠标无操作或者无移动，默认30分钟后自动退出系统（此配置与超时自动锁屏功能互斥，不能同时开启，优先级低于锁屏）
    autoLogoutOvertime: {
        enable: false,
        // 多长时间无操作退出系统（单位：毫秒）
        timeOut: 1800000
    },
    //头像配置
    // HeadAvatar: {
    //     //是否隐藏默认头像
    //     hideDefaultAvatar: false,
    //     // 显示图片头像
    //     shouImageAvatar: false,
    //     // 自定义头像
    //     getUserMenu: function (map) {
    //         var username = map.get('UserName', '999');
    //         return '<div style="display: flex"><img src="react/images/lang/default-black.svg" /><p style="margin-bottom: 0">' + username + '</p></div>'
    //     }
    // },
    // 顶部header高度
    headerHeight: 52,
    // 是否隐藏tab页签
    defaultHideTab: false,
    // tab栏是否显示图标
    showTabIcon: false,
    // 宏变量替换是否使用默认规则，当不配置或者配置为空时，默认优先级PO > modelContainer > editRowSet，当配置为0时，按 editRowSet > billRowSet > modelContainer > PO 规则替换
    macroVarSubWithDefRules: '',
    // 默认主题设置
    THEME: {
        // type: 'cscec',
        /* 启用自定义主题色 */
        enableCustomTheme: true,
        /* 应用主题色 */
        primaryColor: '#0081cc',
        primaryHoverColor: '#3d9fd8',
        primaryActiveColor: '#0c6ea7',
        primaryShadowColor: 'rgba(101, 134, 153, 0.2)',
        /* 左侧menu主题色 */
        menuBackgroundColor: '#0081cc',
        menuFontColor: 'rgba(255,255,255,0.85)',
        // menuFontFamily: 'Microsoft Yahei',
        menuSelectShadowColor: 'rgba(255,255,255,0.05)',
        menuSelectFontColor: 'rgba(255,255,255,1)',
        // menuHoverFontColor:'rgba(255,255,255,1)',

        /* 顶部栏主题色 */
        topBarBackgroundColor: '#ffffff'
    },
    // 样式配置
    OSPGlobalCompStyle: {
        styleConfig: {
            // 弹窗配置
            modal: {
                headerVerticaLine: true,
                headerBackgroundColor: ''
            }
        }
    },
    OSPGlobalCompConfig: {
        messageboxConfig: {
            maxCount: 5
        },
        ospGridConfig: {
            showEditableBorder: true,
            // 数值列保存时保持数值精度
            keepNumberPrecisionWhenSave: false,
            ospColumnConfig: {
                // 是否使用内部数据集（用于控制在使用Excel导入组件导入数据时后台返回的dataSet是否带表名前缀）
                isUseInternalDataSetID: false
            },
            // 无数据时，展示内容是否显示“暂无数据”
            showNoDataText: true,
            // boolean类型 表格编辑方式为动作文本时是否显示省略号，开启后，动作文本的宽度会使用action的宽度来展示
            actionTextEllipsis: false,
            // 响应回车的编辑方式，原始需求：http://192.168.252.13/zentao/task-view-20110.html
            selectValueWhenEnterPressEditors: [],
            //表格点击空白退出监听异步响应，设置true解决退出编辑时可能出现表格崩溃问题
            stopEditAsync: false
        },
        // 输入类型组件的非空提示Tooltip的配置
        ospNotNullTootip: {
            hideOutline: false
        },
        // 弹窗相关配置
        formWindowConfig: {
            // 弹窗底部按钮排序：0清空，1取消，2确定
            // footerButtonOrder: [0,1,2]
        }
    },
    // 加载GWT JS的超时时间，单位秒
    MaxErrorNum: 100,
    // 是否显示顶部中间的搜索框  1：显示  0：不显示
    ShowHeaderSearch: 0,
    HeaderSecrchMode: 'default', // 默认：'default'; 树形分级：'tree'
    // 自定义的警告
    sysWarn: {
        // 错误码
        code: [1400, 1401, 1402],
        message_zh_CN: ['解析系统访问策略失败，不允许访问系统', '当前区域不允许访问本系统', '当前时间段不允许访问本系统'],
        message_en_US: [
            'Failed to resolve system access policy. System access is not allowed',
            'The current area does not allow access to this system',
            'Access to this system is not allowed in the current time period'
        ],
        message_zh_TW: ['解析系統訪問策略失敗，不允許訪問系統', '當前區域不允許訪問本系統', '當前時間段不允許訪問本系統'],
        message_zh_HK: ['解析系統訪問策略失敗，不允許訪問系統', '當前區域不允許訪問本系統', '當前時間段不允許訪問本系統']
    },
    loadingConfig: {
        // 全局loading模式是否启用骨架屏
        loadingIsSkeleton: true,
        // 首页是否骨架屏
        dashboardLoadingIsSkeleton: true
        // 替换全局骨架屏图片地址
        // loadingImageSrc: 'react/images/login/loginAppBg.png',
        // 替换首页骨架屏图片地址
        // dashboardLoadingImageSrc: 'react/images/app/1.jpg'
    },
    // 打开formPlay表单调接口获取token所需要字段
    formPlay: {
        ignoreToken: '0', // 1 忽略token检查
        clientId: 'TOKENTEMP',
        clientSecret: 'TOKENTEMPSECRET'
    },
    // 设置水印
    watermark: {
        app: {
            show: true,
            text: '应用未授权 请联系管理员授权'
            // config: {
            //     watermark_color: '#000000', // 水印字体颜色
            //     watermark_alpha: '0.2', // 水印透明度
            //     watermark_fontsize: '18px', // 水印字体大小
            //     watermark_width: 240, // 水印宽度
            //     watermark_height: 30, // 水印长度
            //     watermark_angle: 0 // 水印倾斜度数
            // }
        },
        form: {
            show: [], // 配置为字符串 'All' 时，表示所有表单都展示水印， 配置为数组 ['SYS_FORM_LIST'] 时，仅配置的表单ID展示水印
            text: '华鲁装备营销系统 <br /> @UserName@ -- @DATETIME@ ', // 需要支持html标签和宏变量
            onlyShowInForm: '1' // 1:水印只在表单区域显示; 0:水印在整个页面显示
            // config: {
            //     watermark_x: -100, // 水印起始位置x轴坐标
            //     watermark_y: -20, // 水印起始位置Y轴坐标
            //     watermark_number: 40, // 水印个数
            //     watermark_x_space: 150, // 水印x轴间隔
            //     watermark_y_space: 150, // 水印y轴间隔
            //     watermark_color: '#000000', // 水印字体颜色
            //     watermark_alpha: '0.2', // 水印透明度
            //     watermark_fontsize: '18px', // 水印字体大小
            //     watermark_width: 210, // 水印宽度
            //     watermark_height: 110, // 水印长度
            //     watermark_angle: 45 // 水印倾斜度数
            // }
        }
    },
    // 系统公告
    notice: {
        //是否弹出
        isNoticeEnable: false,
        // 点击“不再提示”是否关闭所有
        notPromptedAll: true,
        // 启用新版本通知公告
        enableNewNotice: false,
        isShowInformationBadge: false
    },
    // 是否加载配置中心
    loadFrontConfig: true,
    // 默认进入应用管理模块，false的话进入dashboard
    appManageAllow: false,
    // 是否显示上次登录信息
    showLastLoginDescription: false,
    // error消息框自动关闭的延时，单位秒
    ErrorMessageBoxDuration: 3,
    // success消息框自动关闭的延时
    // SuccessMessageBoxDuration: 3,
    // info消息框自动关闭的延时
    // InfoMessageBoxDuration: 3,
    // warning消息框自动关闭的延时
    // WarningMessageBoxDuration: 3,
    // warn消息框自动关闭的延时
    // WarnMessageBoxDuration: 3,
    // 消息弹窗位置  topCenter topLeft topRight bottomLeft bottomRight bottomCenter center
    // messageBoxPlacement: 'topCenter',
    // 应用提示信息是否为弹窗，默认为顶部提示,弹窗提示：window、提醒：alert
    // ShowMessageIsWindow: 'alert',
    // RSA非对称加密
    RSA: {
        // publicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhIm9Qiw3yvlzpVmXEgx0o0HIKbaTI4w1YjWhU+KDyFj6WNX8MKr5yo6CivXFwAQh5WNL5VYy+9xe0updfuC+yr1FQAzWsl69b3IFohWbwFjAnzj3A+0Oj/A3RDzejYLB+2EmqaSNd1ANPwEhehNBcsXj4l+66nMORVb/4meEDbK1PQIamTsQ8/L8CVthy3bhP5IdYYX7ksGOXFgkgd5DTxZ0t91vBZY0pdt/ZKsi1PVmd/7KaO1xrwTvqsGzvsEP6lQbstDkKHcC5mfQYf1MlI7fwMSj5Xu5FVl6ip9kGsYxtzel9dwPkL42IGyGjfdCCYcTI6YxVR/gl0V2m3ch0QIDAQAB',
        EnableRequestBody: false,
        DisableLogin: true,
        DisableLogin4A: false,
        // 是否开启sign_token兼容,默认不启用
        isEnableSignToken: false,
        // 通用接口加解密过滤器忽略的路径，需要时配置
        // IgnorePaths: ['common/service']
        // 启用防重放
        antiReplay: false
    },
    // 接口报文压缩
    // requestGzip: {
    //     EnableGzip: false,
    //     EnableRequestUrl: ['common/service']
    // },
    // 集成cas时，退出跳转的地址
    // logoutRedirectURL: 'http://127.0.0.1:8090/cas/logout?service=http://127.0.0.1:8080/OSPSpringService/index.html'

    // 自定义的菜单加载接口（restful接口）
    // customLoadMenuImp: {
    //     url: '/rest/react/menu ',
    //     method: 'post',
    //     data: {
    //         SYS_ID: 'MHZX'
    //     }
    // },
    APP_PO: {
        // 可通过配置中心配置， 设置到 PO-env 中（同步设置GWT和React的PO对象）
        International: 'zh',
        Country: 'CN',
        MultiLanguage: 'false', //是否启用多语言，在保存表单时生成不同的json文件
        MenuMultiLanguage: 'false', // 是否启用菜单多语言
        DBNO: 'OSP_DB01',
        DataBaseName: 'OSP_DB01'
    },
    APP_EAI: {
        // 可通过配置中心配置， 设置到 EAI 中（同步设置GWT和React的EAI对象）
        RECORD_OP_LOG: 'true', // 记录操作日志
        PRINT_DESIGNER_RECORD_OP_LOG: 'false', // 打印设计器记录日志
        //RECORD_OP_LOG_WITH_FORMDATA: 'SAVE_BILL' //记录需要单据json数据的操作类型(Action组件opType),多组件用,分隔
        // 记录页面停留日志
        RECORD_STAY_LOG: 'false',
    },
    // 错误提示显示message还是弹窗,默认message
    ShowExceptionWindow: false,
    // 隐藏系统错误提示
    HideException: false,
    // 提示信息配置
    MessageBox: {
        hideError: false,
        hideWarn: false,
        hideInfo: false
        // 距离边框的距离（只有上方提示时生效，该值控制的是距离浏览器上边框的距离）
        // top: 8
    },
    // 设计器配置
    Designer: {
        // 隐藏影像组件
        hideImageComps: true,
        // 适配3.0关键指标
        DynamicCardV3: false,
        //提示图标颜色
        tooltipColor: '#8c8c8c',
        //Excel导入使用旧接口 ? imageUpload.gupld : imageUpload.rupld
        ExcelImportOldAPI: false,
        //imageUpload.gupld   imageUpload.rupld servlet.rupld改为新写法:rupld/servlet
        UploadNewApi: false,
        //单据附件justDownloadPDF开启时，exportPrintToFileStream开启不再服务端生成文件再下载，前端直接下载文件流
        exportPrintToFileStream: false,
        //是否需要流程规则设计组件
        loadFlowExpress: false,
        // 可引用操作组ActionGroup的组件集合
        // customReferenceActionGroup: ['GridToolBar','Column','ActionBarBuilder'],
        //关键指标构建列数值格式化精度限制
        // ColumnNumberPrecisionLimit: '6',
    },
    // 中建配置
    cscec: {
        // 隐藏历史记录菜单
        hideHistoryMenu: true
    },
    // 前台刷新token有效期，用于解决‘绘制大表单，时间超出有效期后无法保存’的场景
    refreshTokenValidity: true,
    // 自定义Portal页面
    // portal: {
    //     header: true,
    //     menuItem: {
    //         id: 'aggrid',
    //         caption: '账号编辑',
    //         serverID: '',
    //         config: {
    //             caption: '账号编辑',
    //             forms: 'aggrid',
    //             formID: 'aggrid',
    //             formType: 'ReactForm'
    //         }
    //     },
    //     checkGNQX: false
    // }
    // 配置项见：http://wiki.openserver.cn:8090/pages/viewpage.action?pageId=67666129
    wujie: [],
    // react表单加载扩展字段配置
    // recatFormLoadConfig: {
    //     // PO扩展(从PO中取)
    //     loadJsonPOExtendedField: [],
    //     // 扩展属性配置
    //     loadJsonExtendedField: [],
    // },
    // 隐藏表单中没有功能权限的按钮，默认为禁用状态
    hideNoPermissionButton: false,
    // 是否忽略功能权限，默认不忽略
    ignoreGNQX: false,
    // 低版本浏览器提示
    lowBrowser: {
        show: false,
        browserVersion: {
            Chrome: 112,
            Firefox: 99,
            IE: 11
        }
    },
    // 首页配置
    homePage: {
        // 首页展示模式
        mode: 0 // 0: 默认 1：自编码页面 2：千人千面不带表单 3：表单 4：千人千面带表单
    },
    // 自定义请求header
    customRequestHeaders: {},
    // 请求header中的Authorization名称，默认为Authorization
    AuthorizationKey: '',
    router: {
        // 获取401跳转地址的接口地址，这个值不为空就请求这个接口去获取401的地址
        Get401URLRequestURL: '',
        // 获取登出跳转地址的接口地址，这个值不为空就请求这个接口去获取登出的地址
        GetLogoutURLRequestURL: ''
    },
    // 页签最多显示数量
    // tabConfig: {
    //     // 最多显示数量
    //     max: 5,
    //     // 超过显示数量提示信息
    //     maxTooltip: '页签最多打开5个'
    // }
    ssoEnable: false,
    ssoPath: './sso',
    // 表单中心配置
    FormCenter: {
        isFormCenter: false, //表单中心相关传参appId、isHaveServerJsComps等
        hideDesignerMenu: false //隐藏表单设计器新建等功能菜单
        //loadJsonUrl: 'http://uat.osplcdpservice.openserver.cn/OSPApplication/rest/react/loadjson',//表单中心模式下自定义表单配置的接口地址
    },
    ApiConfig: {
        //version v1为默认版本，可不配.v2为精简版版本,按需配置
        // version: 'v1'
    }

    // 可视组件自定义分组
    // customUIList: [
    //     {
    //         type: 10,
    //         title: "自定义1"
    //     }
    // ]
};
/**
 * GWT 的 PO-env 对象
 * GWTPO 与 reactPO对应，为了退出时清空 reactPO ，而不影响 GWTPO 的配置
 */
window.GWTPO = {};

/**
 * GWT 的 EAI 对象
 * GWTEAI 与 reactEAI 对应，为了退出时清空 reactEAI ，而不影响 GWTEAI 的配置
 */
window.GWTEAI = {};

/**
 * 登录成功跳转进入应用后执行（不包含单点或者4A登录）
 */
window.onLoginSuccess = function () {
    console.log('onLoginSuccess');
};

/**
 * 退出后执行
 */
window.onLogoutSuccess = function () {
    // 代替以前的 beforeLayout
    console.log('onLogoutSuccess');
};

window.beforeLoginViewRender = function (callback) {
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', "http://127.0.0.1:8080/PortalServer/front/config/details", true);
    // xhr.send(null);
    // xhr.onreadystatechange = function () {
    //     if (xhr.status === 200 && xhr.readyState === 4) {
    //         //js处理数据
    //         var info = {
    //             UserName: '11111',
    //             UserCaption: '11111',
    //             token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1MgVE9LRU4iLCJhdWQiOiJhdXRoZW50aWNhdGlvbjpwb3J0YTo5OTk5OjE3MWQ3N2M1ODQ3NDQxZjU5ZGU0YmJhMmY0N2NmMWM1IiwiaXNzIjoiT1NQU0VSVkVSIiwiaWF0IjoxNjYyNDI3NDUwfQ.r-wqKNKqRDCSBHAbK6Qm0DHrIoZW3wJ5ajRBGb2GnRY'
    //         };
    //         callback(info);
    //     }
    // }
    // // 必须有返回值，true：显示登录页；false：不显示登录页
    // return false;
};

/**
 *  初始化信息，token有效期内刷新或者登录成功后都会调用
 */
window.initApplication = function () {
    console.log('initApplication');
};
