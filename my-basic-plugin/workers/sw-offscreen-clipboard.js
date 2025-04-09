import { OFFSCREEN_PATH, TEXT_BINARY, binaryStringToText } from './shared.js'


chrome.runtime.onInstalled.addListener(async () => {
    await chrome.offscreen.createDocument({
        url: OFFSCREEN_PATH,
        reasons: [chrome.offscreen.Reason.CLIPBOARD],
        justification: 'reason for needing the document',
    });

    chrome.runtime.sendMessage({
        type: 'copy',
        target: 'offscreen',
        data: binaryStringToText(TEXT_BINARY)
    });
});
