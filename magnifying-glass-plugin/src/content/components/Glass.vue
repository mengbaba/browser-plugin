<script setup lang="ts">
import { ref,onMounted,nextTick, onUnmounted,  watch  } from 'vue';
import html2canvas from 'html2canvas';
interface Props {
    cursorY:number
    cursorX:number
}
const props = defineProps<Props>()
const emit = defineEmits<{
    close:[]
}>()
    const cursorEl = ref<HTMLElement>()
    const imgSrc = ref('')
    const openGlass = (imgSrc:string,x:number,y:number)=>{
        requestAnimationFrame(()=>{
            if( cursorEl.value){
                const moveX = x - cursorEl.value.clientWidth / 2
                const moveY  = y - cursorEl.value.clientHeight / 2
                cursorEl.value.style.left = moveX+'px'
                cursorEl.value.style.top = moveY+'px'
                cursorEl.value.style.background = `url(${imgSrc}) -${moveX}px -${moveY}px no-repeat`
            }
        })
    }

    const  createImg = async()=>{
        const target = document.querySelector('body')
        try {
            if(target){
         const  canvas =  await   html2canvas(target)
         imgSrc.value = canvas.toDataURL('image/jpeg')
        }else {
            emit('close')
        }
        } catch (error) {
            console.error(error)
            emit('close')
        }


    }

   watch(()=>[props.cursorX,props.cursorY],async()=>{
    await nextTick()
    openGlass(imgSrc.value,props.cursorX,props.cursorY)
   })

    onMounted(async()=>{
        await nextTick()
        await createImg()
        openGlass(imgSrc.value,props.cursorX,props.cursorY)
        document.addEventListener('click',()=>{
            emit('close')
        })
    })

    onUnmounted(()=>{})
</script>

<template>
    <div class="glass-scope">
        <div ref="cursorEl" class="glass-cursor"></div>
    </div>

</template>

<style scoped></style>
