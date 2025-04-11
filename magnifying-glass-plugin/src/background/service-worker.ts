console.log('worker load')

// chrome.runtime.onInstalled.addListener(() => {
//     console.log('首次安装插件')
// });

// chrome.runtime.onStartup.addListener(() => {
//     console.log('浏览器启动时')
// });

// 监听标签页切换事件 注入脚本
chrome.tabs.onActivated.addListener((activeInfo) => {
    // 使用 tabId 获取标签页信息
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.id) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                //@ts-ignore
                files: [import.meta.env.DEV ? 'src/content/content.ts-loader.js' : 'assets/content.ts-loader.js']
            });
        }
    });
});

// 快捷键唤醒插件
chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(Number(tabs[0].id), { type: command })
    })
})

// 点击插件唤醒
chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(Number(tabs[0].id), { type: 'clickPlugin' })
    })
})