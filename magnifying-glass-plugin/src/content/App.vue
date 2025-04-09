<script setup lang="ts">
import { ref,onMounted,nextTick, onUnmounted, watchEffect } from 'vue';
    const isShow = ref(true)
    const transparency = ref(0.2)
    const cursorEl = ref<HTMLElement>()
    const handleMousemove = (event:MouseEvent)=>{
       const clientY =  event.clientY
       const clientX = event.clientX
        requestAnimationFrame(()=>{
            if( cursorEl.value){
                cursorEl.value.style.transform = `translate(${clientX-30}px,${clientY-30}px)`
            }
        })
    }

    watchEffect(()=>{
    if( transparency.value === 1){
            transparency.value = 0.2
    }
    })

    onMounted(async()=>{
        await nextTick()
        isShow.value = true
        document.addEventListener('mouseenter',()=>{
            isShow.value = true
        })
        document.addEventListener('mouseout',(e)=>{
            if(e.relatedTarget === null){
                isShow.value = false
            }
        })
        document.addEventListener('mousemove',handleMousemove)
        window.addEventListener('beforeunload',(e)=>{
            e.preventDefault()
            e.returnValue = ''
            isShow.value = false
        })

        document.addEventListener('click',()=>{
            if(cursorEl.value){
                   transparency.value +=0.1

                cursorEl.value.style.backgroundColor = `rgba(0, 0, 0, ${transparency.value})`
            }
        })

    })

    onUnmounted(()=>{
        document.removeEventListener('mousemove',handleMousemove)
    })
</script>

<template>
  <div :class="{cursor:isShow}" ref="cursorEl"></div>
</template>

<style scoped></style>
