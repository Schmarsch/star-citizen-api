<template>
    <div class="w-full relative">
        <input
            :disabled="disabled"
            :type="type"
            placeholder=" "
            class="peer w-full p-4 pt-6 dark:bg-slate-500 bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-neutral-300 focus:border-black dark:text-white"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <label
            class="absolute text-md duration-150 transform -translate-y-3 top-5 z-9 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4 left-4 text-zinc-400 dark:text-zinc-200"
        >
            {{ label }}
        </label>
        <button
            class="absolute right-4 top-5 text-zinc-400 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-100 focus:outline-none"
            @click="clear"
        >
            <Icon name="material-symbols:cancel" class="h-6 w-6"/>
        </button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    label: string
    type?: string
    disabled?: boolean,
    modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
    type: "text",
})

// emit for modelValue
const emit = defineEmits(["update:modelValue"])

const clear = () => {
    emit("update:modelValue", "")
}
</script>

<style scoped></style>
