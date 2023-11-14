<template>
    <div>
        <div
            class="w-full fixed top-0 border-b-2 z-10 bg-white dark:bg-slate-900 dark:text-white dark:border-slate-700"
        >
            <div id="reading_progress" class="absolute z-30 top-0"></div>
            <AppHeader />
        </div>
        <slot />
        <AppFooter />
    </div>
</template>
<script setup>
const localPath = useLocalePath();
const { t } = useI18n();
useSeoMeta({
    title: '💁‍♂️Vina Blog👉' + t('home') + '💞',
});
onMounted(() => {
    window.addEventListener('scroll', updateProgressBar);
});
const updateProgressBar = () => {
    const s = window.scrollY;
    const d = document.documentElement.scrollHeight;
    const c = window.innerHeight;
    const scrollPercent = ((s / (d - c)) * 100).toFixed(0);
    console.log(scrollPercent);
    document.querySelector('#reading_progress').style.width = scrollPercent + 'vw';
};
</script>
