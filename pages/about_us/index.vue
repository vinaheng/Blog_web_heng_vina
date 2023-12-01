<script lang="ts" setup>
const { t } = useI18n();
useSeoMeta({
    title: '💁‍♂️Vina Blog👉' + t('about_us') + '💞',
});
</script>
<template>
    <transition appear name="page">
        <div v-show="true" class="max-w-[800px] m-auto p-5 pt-20 mt-14 dark:text-white">
            <div class="flex flex-col items-center">
                <h2 class="lg:text-6xl text-4xl">{{ $t('about_us') }}</h2>
                <span class="m-8 dark:border-slate-700 border w-full"></span>
                <h2 class="text-2xl lg:text-3xl">"{{ $t('why_girl_hate_me') }}"</h2>
                <hr class="m-8 dark:border-slate-700" />
                <img v-show="true" class="object-cover rounded-md shadow-md" src="~/assets/img/use_admin.png" alt="" />
            </div>
            <div class="my-6 text-justify">
                <h2 class="lg:text-2xl text-xl my-8 font_san_200" v-html="$t('about_title')"></h2>
                <span class="text-lg font_san_200 text-justify leading-9" v-html="$t('about_one')"></span>
            </div>
            <div class="border-l-4 border-red-600 h-full pl-4 rounded-md text-justify">
                <span class="text-lg font_san_200 leading-9" v-html="$t('about_tow')"></span>
            </div>
            <div class="mt-8 text-justify">
                <span class="text-lg font_san_200 leading-9 tracking-wide" v-html="$t('about_three')"></span>
            </div>
        </div>
    </transition>
</template>
