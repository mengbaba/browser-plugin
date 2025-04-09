//   "default_popup": "pages/popup/index.html"
chrome.runtime.onMessage.addListener(handleMessages)

async function handleMessages(message) {
    console.log(message)
    if (message.target !== 'offscreen') {
        return
    }

    switch (message.type) {
        case 'copy':
            handleCopyData(message.data)
            break;
        default:
            break;
    }
}

const textEl = document.querySelector('#text')

async function handleCopyData(data) {
    try {
        if (typeof data !== 'string') {
            throw new TypeError(`value not string,got '${typeof data}'`)
        }
        textEl.value = data
        textEl.select()
        document.execCommand('copy')
    } catch (error) {
        window.close()
    }
}