import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/inject.css.js");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/vendor/vite-client.js"
const __vite__id = "/Users/mt230728m1/my-profile/browser-plugin/magnifying-glass-plugin/src/content/inject.css"
const __vite__css = ".cursor {\n    position: fixed;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    width: 60px;\n    height: 60px;\n    background-color: rgba(0, 0, 0, 0.2);\n    z-index: 9999;\n    border-radius: 50%;\n}\n\n.glass-scope {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n\n.glass-cursor {\n    display: block;\n    position: absolute;\n    cursor: none;\n    outline: none;\n    pointer-events: none;\n    image-rendering: auto;\n    width: 180px;\n    height: 180px;\n    background-color: rgba(0, 0, 0, 0.0);\n    border-radius: 50%;\n    transform: scale(2);\n    box-shadow: rgba(255, 255, 255, 0.85) 0px 0px 0px 3.5px, rgba(0, 0, 0, 0.25) 0px 0px 3.5px 3.5px, rgba(0, 0, 0, 0.25) 0px 0px 20px 1px inset;\n}"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
import.meta.hot.prune(() => __vite__removeStyle(__vite__id))