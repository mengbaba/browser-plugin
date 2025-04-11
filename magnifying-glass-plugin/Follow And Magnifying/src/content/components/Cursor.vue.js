import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/components/Cursor.vue.js");import { defineComponent as _defineComponent } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
import { ref, onMounted, nextTick, onUnmounted, watch } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Cursor",
  props: {
    cursorY: { type: Number, required: true },
    cursorX: { type: Number, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isShow = ref(true);
    const cursorEl = ref();
    const setCursorPosition = (x, y) => {
      requestAnimationFrame(() => {
        if (cursorEl.value) {
          const moveX = x - cursorEl.value.clientWidth / 2;
          const moveY = y - cursorEl.value.clientHeight / 2;
          cursorEl.value.style.transform = `translate(${moveX}px,${moveY}px)`;
        }
      });
    };
    watch(() => [props.cursorX, props.cursorY], async () => {
      await nextTick();
      setCursorPosition(props.cursorX, props.cursorY);
    });
    onMounted(async () => {
      await nextTick();
      isShow.value = true;
      setCursorPosition(props.cursorX, props.cursorY);
      document.addEventListener("mouseenter", () => {
        isShow.value = true;
      });
      document.addEventListener("mouseout", (e) => {
        if (e.relatedTarget === null) {
          isShow.value = false;
        }
      });
    });
    onUnmounted(() => {
    });
    const __returned__ = { props, isShow, cursorEl, setCursorPosition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "div",
    {
      class: _normalizeClass({ "cursor": $setup.isShow }),
      ref: "cursorEl"
    },
    null,
    2
    /* CLASS */
  );
}
_sfc_main.__hmrId = "c537bc30";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mt230728m1/my-profile/browser-plugin/magnifying-glass-plugin/src/content/components/Cursor.vue"]]);
