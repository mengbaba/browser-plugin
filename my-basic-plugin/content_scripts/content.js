window.addEventListener("message", function (msg) {
  console.log(msg)
}, false)

function createElement(tagName, path, attributeOptions, callback) {
  const element = document.createElement(tagName)
  for (const key in attributeOptions) {
    if (Object.prototype.hasOwnProperty.call(attributeOptions, key)) {
      element.setAttribute(key, attributeOptions[key])
    }
  }
  const url = chrome.runtime.getURL(path)
  element.onload = function () {
    this.parentNode.removeChild(this)
  }
  callback && callback(element, url)
  console.log('element', element)
  return element
}


createElement('script', "content_scripts/inject.js", { type: 'text/javascript' }, (tag, url) => {
  tag.src = url
  document.head.appendChild(tag)
})


chrome.runtime.onMessage.addListener((message) => {
  console.log('content 接受service msg', message)
})