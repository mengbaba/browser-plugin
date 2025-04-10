<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Cursor from './components/Cursor.vue'
import Glass from './components/Glass.vue'
const isShow = ref(false)
const cursorY = ref(0)
const cursorX = ref(0)
function handleMessage(message: any): boolean | undefined {
    if(message.type ==='clickPlugin'){
        isShow.value = !isShow.value
    }
    return
}
chrome.runtime.onMessage.addListener((handleMessage))

onMounted(async()=>{
        await nextTick()
        document.addEventListener('mousemove',(event:MouseEvent)=>{
            cursorY.value =  event.clientY
            cursorX.value = event.clientX
        })
    })
</script>

<template>
    <Cursor v-if="!isShow" :cursor-x="cursorX" :cursor-y="cursorY"></Cursor>
    <Glass v-else @close="isShow = false" :cursor-x="cursorX" :cursor-y="cursorY"></Glass>
</template>

<style scoped></style>
