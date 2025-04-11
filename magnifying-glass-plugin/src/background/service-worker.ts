import { FOLLOW_MENU_ID } from './const'
import "./sw-follow-glass-action"
console.log('worker load')

function createPluginMenus() {
    chrome.contextMenus.create({
        id: FOLLOW_MENU_ID,
        title: '改变跟随小球背景色',
        contexts: ['all']
    })

    chrome.contextMenus.create({
        parentId: FOLLOW_MENU_ID,
        id: 'black',
        title: '黑色',
        contexts: ['all']
    })

    chrome.contextMenus.create({
        parentId: FOLLOW_MENU_ID,
        id: 'red',
        title: '红色',
        contexts: ['all']
    })

    chrome.contextMenus.create({
        parentId: FOLLOW_MENU_ID,
        id: 'green',
        title: '绿色',
        contexts: ['all']
    })

    chrome.contextMenus.create({
        parentId: FOLLOW_MENU_ID,
        id: 'yellow',
        title: '黄色',
        contexts: ['all']
    })
}

chrome.runtime.onInstalled.addListener(() => {
    console.log('首次安装插件')
    createPluginMenus()

});

// chrome.runtime.onStartup.addListener(() => {
//     console.log('浏览器启动时')
// });
