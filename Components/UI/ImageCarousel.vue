<template>
    <div class="flex flex-col justify-center items-center">
        <div class="flex flex-row justify-center items-center gap-5 relative">
            <div class="left" @click="previousPhoto">
                <Icon name="ic:baseline-chevron-left" color="black" />
            </div>
            <template v-for="(image, index) in props.images">
                <img
                    v-if="index === currentPhoto"
                    :src="image"
                    :alt="`Photo of ${image}`"
                    class="rounded-lg lg:h-64 md:h-40 sm:h-20"
                />
            </template>
            <div class="right" @click="nextPhoto">
                <Icon name="ic:baseline-chevron-right" color="black" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    images: string[]
}>()

const currentPhoto = ref(0)

const nextPhoto = () => {
    if (currentPhoto.value < props.images.length - 1) {
        currentPhoto.value++
    } else {
        currentPhoto.value = 0
    }
}

const previousPhoto = () => {
    if (currentPhoto.value > 0) {
        currentPhoto.value--
    } else {
        currentPhoto.value = props.images.length - 1
    }
}
</script>

<style lang="postcss" scoped>
.left {
    @apply absolute h-10 w-10 bg-white/30 flex justify-center items-center rounded-full left-5 cursor-pointer;
}

.right {
    @apply absolute h-10 w-10 bg-white/30 flex justify-center items-center rounded-full right-5 cursor-pointer;
}
</style>
