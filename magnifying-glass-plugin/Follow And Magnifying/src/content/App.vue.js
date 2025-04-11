import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/App.vue.js");import { defineComponent as _defineComponent } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
import { nextTick, onMounted, ref } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
import Cursor from "/src/content/components/Cursor.vue.js";
import Glass from "/src/content/components/Glass.vue.js";
import storage from "/src/utils/storage.ts.js";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    const isShow = ref(false);
    const cursorBgColor = ref("black");
    const cursorY = ref(0);
    const cursorX = ref(0);
    function handleMessage(message) {
      if (message.type === "operationPlugin") {
        isShow.value = !isShow.value;
      } else {
        getFollowColor();
      }
      return void 0;
    }
    chrome.runtime.onMessage.addListener(handleMessage);
    async function getFollowColor() {
      const res = await storage.get("followColor");
      if (res?.followColor) {
        cursorBgColor.value = res.followColor;
      }
    }
    onMounted(async () => {
      await nextTick();
      getFollowColor();
      document.addEventListener("mousemove", (event) => {
        cursorY.value = event.clientY;
        cursorX.value = event.clientX;
      });
      document.addEventListener("keydown", () => {
        isShow.value = false;
      });
    });
    const __returned__ = { isShow, cursorBgColor, cursorY, cursorX, handleMessage, getFollowColor, Cursor, Glass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { normalizeStyle as _normalizeStyle, openBlock as _openBlock, createBlock as _createBlock } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return !$setup.isShow ? (_openBlock(), _createBlock($setup["Cursor"], {
    key: 0,
    "cursor-x": $setup.cursorX,
    "cursor-y": $setup.cursorY,
    style: _normalizeStyle({ backgroundColor: $setup.cursorBgColor })
  }, null, 8, ["cursor-x", "cursor-y", "style"])) : (_openBlock(), _createBlock($setup["Glass"], {
    key: 1,
    onClose: _cache[0] || (_cache[0] = ($event) => $setup.isShow = false),
    "cursor-x": $setup.cursorX,
    "cursor-y": $setup.cursorY
  }, null, 8, ["cursor-x", "cursor-y"]));
}
import "/src/content/App.vue__vue_type--style_index--0_scoped--c2054e6a_lang.css.js";
_sfc_main.__hmrId = "c2054e6a";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.on("file-changed", ({ file }) => {
  __VUE_HMR_RUNTIME__.CHANGED_FILE = file;
});
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/vendor/id-__x00__plugin-vue:export-helper.js";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c2054e6a"], ["__file", "/Users/mt230728m1/my-profile/browser-plugin/magnifying-glass-plugin/src/content/App.vue"]]);
