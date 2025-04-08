import './sw-omnibox.js'
import './sw-tips.js'
console.log('加载脚本')

chrome.action.setBadgeText({ text: 'ON' });
chrome.action.setBadgeBackgroundColor({ color: '#f5f5f5' });