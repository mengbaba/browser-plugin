import storage from '../utils/storage';
import { OPERATION_PLUGIN } from './const'
// 监听标签页切换事件 注入脚本
chrome.tabs.onActivated.addListener((activeInfo) => {
    // 使用 tabId 获取标签页信息
    chrome.tabs.get(activeInfo.tabId, async (tab) => {
        if (tab.id) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                //@ts-ignore
                files: [import.meta.env.DEV ? 'src/content/content.ts-loader.js' : 'assets/content.ts-loader.js']
            });
            const res = await storage.get('followColor')
            if (res?.followColor) {
                chrome.tabs.sendMessage(tab.id, { type: res.followColor })
            }
        }
    });
});

// 快捷键唤醒放大镜
chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(Number(tabs[0].id), { type: command })
    })
})

// 点击插件插件唤醒放大镜
chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(Number(tabs[0].id), { type: OPERATION_PLUGIN })
    })
})

// 切换跟随小球背景颜色
chrome.contextMenus.onClicked.addListener((info, tab) => {
    storage.set({ followColor: info.menuItemId })
    chrome.tabs.sendMessage(Number(tab?.id), { type: info.menuItemId })

})