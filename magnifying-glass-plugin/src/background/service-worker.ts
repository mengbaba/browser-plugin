console.log('worker load')

// chrome.runtime.onInstalled.addListener(() => {
//     console.log('首次安装插件')
// });

// chrome.runtime.onStartup.addListener(() => {
//     console.log('浏览器启动时')
// });

// 注入脚本到所有打开的标签页
// function injectScriptToAllTabs() {

//     chrome.tabs.query({}, (tabs) => {
//         tabs.forEach((tab) => {

//             // 通过 scripting API 向每个标签页注入 content.js 脚本
//             if (tab.id) {
//                 chrome.scripting.executeScript({
//                     target: { tabId: tab.id },
//                     files: ['src/content/content.ts'] // 指定要注入的脚本
//                 });
//             }
//         });
//     });

// }

// 监听标签页切换事件
chrome.tabs.onActivated.addListener((activeInfo) => {
    // 使用 tabId 获取标签页信息
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.id) {
            // chrome.scripting.executeScript({
            //     target: { tabId: tab.id },
            //     //@ts-ignore
            //     files: [import.meta.env.DEV ? 'src/content/content.ts-loader.js' : 'assets/content.ts-loader.js']
            // });
        }
    });
});

chrome.action.onClicked.addListener(() => {
    console.log('点击了插件')
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log('tabs详情', tabs)
        chrome.tabs.sendMessage(Number(tabs[0].id), { type: 'clickPlugin' })
    })
})