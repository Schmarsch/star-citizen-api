<template>
    <div class="card">
        <div class="">
            <UIImageCarousel :images="ship.photos" v-if="ship.photos" />
            <img
                v-else
                src="https://via.placeholder.com/689x235"
                :alt="`Photo of ${ship.name}`"
                class="rounded-lg lg:h-64 md:h-40 sm:h-20"
            />
        </div>
        <div class="flex flex-col justify-center items-center">
            <span class="font-bold text-3xl">
                {{ ship.manufacturer }} - {{ ship.name }}
            </span>
            <span>
                {{ ship.role }}
            </span>
        </div>
        <div>
            <span v-if="ship.buy_at" class="font-bold text-xl">
                {{ ship.buy_at[0].price }} at {{ ship.buy_at[0].city_name }}
            </span>
            <span v-else class="font-bold text-xl">
                Not available for purchase
            </span>
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
            <a
                class="btn"
                :href="ship.video_url"
                v-if="ship.video_url"
                target="_blank"
            >
                Video
            </a>
            <a
                class="btn"
                :href="ship.hotsite_url"
                v-if="ship.hotsite_url"
                target="_blank"
            >
                Hotsite
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    ship: ship
}>()
</script>

<style lang="postcss" scoped>
.card {
    @apply bg-slate-300 rounded-lg shadow-lg m-3 p-2 flex flex-col justify-start items-center gap-5 select-none;
}
</style>
