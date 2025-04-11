<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Cursor from './components/Cursor.vue'
import Glass from './components/Glass.vue'
import storage from '../utils/storage'
const isShow = ref(false)
const cursorBgColor = ref('black')
const cursorY = ref(0)
const cursorX = ref(0)
function handleMessage(message: any) {
    if(message.type ==='operationPlugin'){
        isShow.value = !isShow.value
    }else {
        getFollowColor()
    }
    return undefined
}
chrome.runtime.onMessage.addListener(handleMessage)

async function getFollowColor(){
    const res =  await storage.get('followColor')
        if(res?.followColor){
            cursorBgColor.value =  res.followColor
        }
}

onMounted(async()=>{
        await nextTick()
        getFollowColor()
        document.addEventListener('mousemove',(event:MouseEvent)=>{
            cursorY.value =  event.clientY
            cursorX.value = event.clientX
        })

        document.addEventListener('keydown',()=>{
            isShow.value = false
        })
    })
</script>

<template>
    <Cursor v-if="!isShow" :cursor-x="cursorX" :cursor-y="cursorY" :style="{backgroundColor:cursorBgColor}"></Cursor>
    <Glass v-else @close="isShow = false" :cursor-x="cursorX" :cursor-y="cursorY"></Glass>
</template>

<style scoped>
/* @import "./inject.css"; */
</style>
