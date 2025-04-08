const offScreenPath = '../pages/offScreen/index.html'
const textToCopy = '11100110100111011000111011100101100100111011001011100110100110001010111111100101100000101011101111101001100000001011110000001010'
function binaryStringToText(binaryString) {
    const bytes = new Uint8Array(binaryString.match(/[01]{8}/g).map(byte => parseInt(byte, 2)));
    return new TextDecoder().decode(bytes);
}

chrome.runtime.onInstalled.addListener(async () => {
    await chrome.offscreen.createDocument({
        url: offScreenPath,
        reasons: [chrome.offscreen.Reason.CLIPBOARD],
        justification: 'reason for needing the document',
    });

    chrome.runtime.sendMessage({
        type: 'copy',
        target: 'offscreen',
        data: binaryStringToText(textToCopy)
    });
});
