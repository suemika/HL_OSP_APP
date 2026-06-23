const resources = {
    // 解决流程规则编辑器显示空白问题 add by zhangzhen 20250513
    stylesheets: [
        "./react/js/flowexpresscomponent/codemirror/lib/codemirror.css",
        "./react/js/flowexpresscomponent/codemirror/addon/hint/show-hint.css",
        "./react/js/flowexpresscomponent/style1.css"
    ],
    scripts: [
        "./react/js/flowexpresscomponent/codemirror/lib/codemirror.js",
        "./react/js/flowexpresscomponent/codemirror/addon/hint/show-hint.js",
        "./react/js/flowexpresscomponent/codemirror/addon/edit/matchbrackets.js",
        "./react/js/flowexpresscomponent/fomula-hint.js",
        "./react/js/flowexpresscomponent/codemirror/addon/selection/active-line.js",
        "./react/js/flowexpresscomponent/html.js",
        "./react/js/flowexpresscomponent/formula.js"
    ]
};

// 动态加载样式表
function loadStylesheets() {
    resources.stylesheets.forEach((link) => {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = `${link}?${new Date().getTime()}`; // 添加时间戳以避免缓存
        document.head.appendChild(linkElement);
    });
}

// 动态加载脚本（按顺序加载）
async function loadScripts() {
    for (const src of resources.scripts) {
        const scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = `${src}?${new Date().getTime()}`; // 添加时间戳以避免缓存

        // 等待脚本加载完成
        await new Promise((resolve, reject) => {
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
            document.body.appendChild(scriptElement);
        });
    }
}

// 提供一个公共函数，按需加载资源
async function loadFlowExpressResources() {
    if (window.reactEnv?.Designer?.loadFlowExpress) {
        try {
            // 先加载样式表
            loadStylesheets();

            // 然后加载脚本，确保顺序
            await loadScripts();

            console.log("所有脚本和样式已成功加载！");
        } catch (error) {
            console.error("加载脚本时发生错误：", error);
        }
    }
}

// 调用加载函数
loadFlowExpressResources();