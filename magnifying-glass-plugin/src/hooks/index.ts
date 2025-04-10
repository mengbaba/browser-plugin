import { reactive } from 'vue'

interface OnMessage {
    message: SendMessage | null
    sender: chrome.runtime.MessageSender | null
    senderResponse: () => void

}

interface SendMessage {
    type: string,
    data?: any
}

export function useOnChromeMessage() {
    const res = reactive<OnMessage>({
        message: null,
        sender: null,
        senderResponse: () => { }
    })

    function handleMessage(message: any, sender: chrome.runtime.MessageSender, senderResponse: () => void): boolean | undefined {
        console.log('service-worker:', {
            message,
            sender,
            senderResponse
        })
        res.message = message
        res.sender = sender
        res.senderResponse = senderResponse
        return
    }

    chrome.runtime.onMessage.addListener(handleMessage)

    return {
        res,
        close: chrome.runtime.onMessage.removeListener(handleMessage)
    }
}

export async function useSendChromeMessage(props: SendMessage) {
    const data = await chrome.runtime.sendMessage(props)
    return data
}