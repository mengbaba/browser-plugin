function set(items) {
  chrome.storage.local.set(items, () => {
    console.log("保存成功");
  });
}
async function get(keys) {
  try {
    const res = await chrome.storage.local.get(keys);
    return res;
  } catch {
    return null;
  }
}
async function remove(keys) {
  try {
    await chrome.storage.local.remove(keys);
    return true;
  } catch {
    return false;
  }
}
async function clear() {
  try {
    await chrome.storage.local.clear();
    return true;
  } catch {
    return false;
  }
}
export default {
  set,
  get,
  remove,
  clear
};
