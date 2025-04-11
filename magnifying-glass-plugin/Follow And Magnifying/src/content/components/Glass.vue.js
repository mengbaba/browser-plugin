import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/components/Glass.vue.js");import { defineComponent as _defineComponent } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
import { ref, onMounted, nextTick, onUnmounted, watch } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
import html2canvas from "/vendor/.vite-deps-html2canvas.js__v--39ec6ed7.js";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Glass",
  props: {
    cursorY: { type: Number, required: true },
    cursorX: { type: Number, required: true }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const cursorEl = ref();
    const imgSrc = ref("");
    const openGlass = (imgSrc2, x, y) => {
      requestAnimationFrame(() => {
        if (cursorEl.value) {
          const moveX = x - cursorEl.value.clientWidth / 2;
          const moveY = y - cursorEl.value.clientHeight / 2;
          cursorEl.value.style.left = moveX + "px";
          cursorEl.value.style.top = moveY + "px";
          cursorEl.value.style.background = `url(${imgSrc2}) -${moveX}px -${moveY}px no-repeat`;
        }
      });
    };
    const createImg = async () => {
      const target = document.querySelector("body");
      try {
        if (target) {
          const canvas = await html2canvas(target);
          imgSrc.value = canvas.toDataURL("image/jpeg");
        } else {
          emit("close");
        }
      } catch (error) {
        console.error(error);
        emit("close");
      }
    };
    watch(() => [props.cursorX, props.cursorY], async () => {
      await nextTick();
      openGlass(imgSrc.value, props.cursorX, props.cursorY);
    });
    onMounted(async () => {
      await nextTick();
      await createImg();
      openGlass(imgSrc.value, props.cursorX, props.cursorY);
      document.addEventListener("click", () => {
        emit("close");
      });
    });
    onUnmounted(() => {
    });
    const __returned__ = { props, emit, cursorEl, imgSrc, openGlass, createImg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/vendor/.vite-deps-vue.js__v--39ec6ed7.js";
const _hoisted_1 = { class: "glass-scope" };
const _hoisted_2 = {
  ref: "cursorEl",
  class: "glass-cursor"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode(
      "div",
      _hoisted_2,
      null,
      512
      /* NEED_PATCH */
    )
  ]);
}
_sfc_main.__hmrId = "3cc15478";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/mt230728m1/my-profile/browser-plugin/magnifying-glass-plugin/src/content/components/Glass.vue"]]);
