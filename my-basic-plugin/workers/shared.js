export const OFFSCREEN_PATH = '../pages/offScreen/index.html'
export const TEXT_BINARY = '11100110100111011000111011100101100100111011001011100110100110001010111111100101100000101011101111101001100000001011110000001010'

export function binaryStringToText(binaryString) {
    const bytes = new Uint8Array(binaryString.match(/[01]{8}/g).map(byte => parseInt(byte, 2)));
    return new TextDecoder().decode(bytes);
}