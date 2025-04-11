function handleKeyDown(e: KeyboardEvent) {
    // 检测 Ctrl + C / Command + C
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        console.log('复制快捷键被按下');
        e.preventDefault();  // 如果需要阻止默认复制行为
    }
    // 检测 Ctrl + V / Command + V
    if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        console.log('粘贴快捷键被按下');
        e.preventDefault();  // 如果需要阻止默认粘贴行为
    }
}

function handleCopy(e: ClipboardEvent) {
    e.preventDefault();  // 阻止默认的复制行为
    console.log('复制行为被禁用');
}


export function initListener() {
    console.log('初始化监听器')
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
}

export function removeEventListener() {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('copy', handleCopy);
}


