function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(function () {
        console.log('文本已成功复制到剪贴板');
    }).catch(function (error) {
        console.error('复制失败: ', error);
    });

}

// function handleKeyDown(e: KeyboardEvent) {
//     // 检测 Ctrl + C / Command + C
//     if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
//         console.log('复制快捷键被按下');
//         e.preventDefault();  // 如果需要阻止默认复制行为
//     }
//     // 检测 Ctrl + V / Command + V
//     if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
//         console.log('粘贴快捷键被按下');
//         e.preventDefault();  // 如果需要阻止默认粘贴行为
//     }
// }
// function handleCopy(e: ClipboardEvent) {
//     e.preventDefault();  // 阻止默认的复制行为
//     console.log('复制行为被禁用');
// }

function hackReplaceEl(hackTag: string, replaceTag: string) {
    const hackT = document.querySelectorAll(hackTag)
    if (hackT?.length > 0) {
        hackT.forEach((item) => {
            const rT = document.createElement(replaceTag);
            rT.className = `hack-${replaceTag}`
            rT.innerHTML = item.innerHTML;
            item.parentNode?.replaceChild(rT, item);
        })
    }
}


import { useTextSelection } from '@vueuse/core'
import { nextTick, onMounted, ref, watch, type WatchHandle } from 'vue';
export function useHackCopy() {
    const select = useTextSelection()
    const stop = ref<WatchHandle | null>(null)
    onMounted(async () => {
        await nextTick()
        chrome.runtime.onMessage.addListener((message: any) => {
            console.log('开启hack')
            if (message.type) {
                console.log('初始化监听器')
                stop.value = watch(() => select.text.value, (text) => {
                    console.log(text)
                    copyTextToClipboard(text)
                })
                hackReplaceEl('pre', 'div')
            } else {
                console.log('关闭脚本')
                hackReplaceEl('.hack-div', 'pre')
                stop.value && stop.value()
            }
            return true
        })
    })



    return {
        select
    }
}