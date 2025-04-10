<script setup lang="ts">
import { ref,onMounted,nextTick, onUnmounted, watch } from 'vue';
interface Props {
    cursorY:number
    cursorX:number
}
const props = defineProps<Props>()
    const isShow = ref(true)
    const cursorEl = ref<HTMLElement>()
    const setCursorPosition = (x:number,y:number)=>{
        requestAnimationFrame(()=>{
            if( cursorEl.value){
                const moveX  = x - cursorEl.value.clientWidth / 2
                const moveY  = y - cursorEl.value.clientHeight / 2
                cursorEl.value.style.transform = `translate(${moveX}px,${moveY}px)`
            }
        })
  }


watch(()=>[props.cursorX,props.cursorY],async()=>{
    await nextTick()
    setCursorPosition(props.cursorX,props.cursorY)
})



onMounted(async()=>{
        await nextTick()
        isShow.value = true
        setCursorPosition(props.cursorX,props.cursorY)
        document.addEventListener('mouseenter',()=>{
            isShow.value = true
        })
        document.addEventListener('mouseout',(e)=>{
            if(e.relatedTarget === null){
                isShow.value = false
            }
        })

        window.addEventListener('beforeunload',(e)=>{
            e.preventDefault()
            e.returnValue = ''
            isShow.value = false
        })
    })

    onUnmounted(()=>{})
</script>

<template>
  <div :class="{'cursor':isShow}" ref="cursorEl">
  </div>
</template>

<style scoped></style>
