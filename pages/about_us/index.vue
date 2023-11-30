<script lang="ts" setup>
const { t } = useI18n();
useSeoMeta({
    title: '💁‍♂️Vina Blog👉' + t('about_us') + '💞',
});
</script>
<template>
    <transition appear name="page">
        <div v-show="true" class="max-w-[700px] m-auto p-5 pt-20 mt-14 dark:text-white">
            <div class="flex flex-col items-center">
                <h2 class="lg:text-6xl text-4xl">{{ $t('about_us') }}</h2>
                <span class="m-8 dark:border-slate-700 border w-full"></span>
                <h2 class="text-2xl lg:text-3xl">"{{ $t('why_girl_hate_me') }}"</h2>
                <hr class="m-8 dark:border-slate-700" />
                <img class="object-cover rounded-md shadow-md" src="~/assets/img/use_admin.jpg" alt="" />
            </div>
            <div class="my-6">
                <h2 class="lg:text-2xl text-xl my-8">{{ $t('about_title') }}</h2>
                <span class="text-xl font_san_200">{{ $t('about_one') }}</span>
            </div>
        </div>
    </transition>
</template>
