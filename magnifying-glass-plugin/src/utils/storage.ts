function set(items: {
    [name: string]: any;
},) {
    chrome.storage.local.set(items, () => {
        console.log('保存成功')
    })
}
async function get(keys?: string | string[]) {
    try {
        const res = await chrome.storage.local.get(keys)
        return res
    } catch {
        return null
    }

}
async function remove(keys: string | string[]) {
    try {
        await chrome.storage.local.remove(keys)
        return true
    } catch {
        return false
    }
}
async function clear() {
    try {
        await chrome.storage.local.clear()
        return true
    } catch {
        return false
    }
}


export default {
    set,
    get,
    remove,
    clear
}
