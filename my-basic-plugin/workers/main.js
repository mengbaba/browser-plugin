import './sw-omnibox.js'
import './sw-tips.js'
import './sw-offscreen.js'
console.log('loading script')
chrome.action.setBadgeText({ text: 'ON' });
chrome.action.setBadgeBackgroundColor({ color: '#f5f5f5' });



