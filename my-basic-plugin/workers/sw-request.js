// 监听request
chrome.webRequest.onBeforeSendHeaders.addListener(details => {
    console.log('onBeforeSendHeaders', details)
    return { requestHeaders: details.requestHeaders }
}, { urls: ["<all_urls>"] }, ["extraHeaders", "requestHeaders"])


chrome.webRequest.onCompleted.addListener(details => {
    console.log('onCompleted', details)
    return { requestHeaders: details.requestHeaders }
}, { urls: ["<all_urls>"] }, ["extraHeaders", "responseHeaders"])
