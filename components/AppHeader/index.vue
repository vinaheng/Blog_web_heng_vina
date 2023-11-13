<template>
    <div class="container m-auto flex items-center text-header justify-between px-4 relative">
        <!-- <div id="bar" class="absolute z-30 top-0"></div> -->
        <NuxtLink to="/"><img src="~/assets/img/Blog_pic.svg" class="h-14" alt="" /></NuxtLink>
        <div class="flex gap-10">
            <Menu class="hidden xl:flex" />
            <div class="gap-6 hidden xl:flex">
                <SwitchLanguage />
                <Button class="bg-blue-900 text-white rounded-sm py-2 px-4 gap-6">{{ $t('login') }}</Button>
            </div>
        </div>
        <!-- Menu Mobile -->
        <div class="flex xl:hidden items-center">
            <SwitchLanguage class="mr-[-10px]" />

            <IconsMenu
                class="text-4xl hover:scale-105 transition-all border-2 w-16 h-10 rounded-md"
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
