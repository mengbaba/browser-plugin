console.log('worker load')
chrome.action.onClicked.addListener(() => {
    console.log('点击了插件')
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(Number(tabs[0].id), { type: 'clickPlugin' })
    })
})