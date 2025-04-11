console.log('load hack')
import storage from "../utils/storage"
chrome.runtime.onInstalled.addListener(() => {
    storage.set({ isActive: false })
})

function changeIcon(path: string) {
    chrome.action.setIcon({
        path: {
            16: path,
            48: path,
            128: path
        }
    });
}



chrome.action.onClicked.addListener(async () => {
    let isActive = false
    console.log('点击了icon')
    const res = await storage.get('isActive')
    if (!res?.isActive) {
        isActive = true
        storage.set({ isActive: true })
        changeIcon('src/assets/open_icon.png')
    } else {
        isActive = false
        storage.set({ isActive: false })
        changeIcon('src/assets/default_icon.png')
    }
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(Number(tabs[0].id), { type: isActive })
    })
})