<template>
    <transition appear name="header">
        <div v-show="true" class="container m-auto flex items-center text-header justify-between px-4 relative">
            <!-- <div id="bar" class="absolute z-30 top-0"></div> -->
            <NuxtLink to="/"><img src="~/assets/img/Blog_pic.svg" class="h-14" alt="" /></NuxtLink>
            <div class="flex gap-10">
                <Menu class="hidden xl:flex" />
                <div class="gap-2 hidden xl:flex">
                    <SwitchLanguage />
                    <DarkMode />
                    <Button class="bg-blue-900 text-white rounded-sm py-2 px-4 gap-6">{{ $t('login') }}</Button>
                </div>
            </div>
            <!-- Menu Mobile -->
            <div class="flex gap-2 xl:hidden">
                <SwitchLanguage />
                <IconsMenu
                    class="text-4xl hover:scale-105 transition-all dark:border-slate-800 border-[1px] rounded-md w-12 h-11"
                    @click="toggleMenu()"
                />
            </div>
            <transition>
                <MenuMobile
                    @click="toggleMenu()"
                    v-if="menuState"
                    class="absolute top-[100%] z-10 right-0 xl:hidden block ease-in-out duration-300"
                />
            </transition>
        </div>
    </transition>
</template>
<script setup lang="ts">
const { menuState, toggleMenu } = useMenu();
// let scr = 0;
// let progress = 0;
// const fullHeight = ref(document.body.scrollHeight - window.innerHeight);
// const handleScroll = () => {
//     scr = window.scrollY;
//     progress = (scr / fullHeight.value) * 100;
//     document.getElementById('bar').style.width = `${progress}vw`;
// };

// onMounted(() => {
//     window.addEventListener('scroll', handleScroll);
// });

// onUnmounted(() => {
//     window.removeEventListener('scroll', handleScroll);
// });
const title = ref('Lesson');
useSeoMeta({
    title,
});
</script>
