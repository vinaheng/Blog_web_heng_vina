<template>
    <transition appear>
        <div v-show="true" class="container m-auto flex items-center text-header justify-between px-4 relative">
            <NuxtLink to="/"><img src="~/assets/img/Blog_pic.svg" class="h-14" alt="" /></NuxtLink>
            <div class="flex gap-10">
                <Menu class="hidden xl:flex" />
                <div class="gap-2 hidden xl:flex">
                    <SwitchLanguage />
                    <DarkMode />
                    <Button
                        class="bg-blue-800 border-[1px] dark:border-slate-700 text-white rounded-md py-2 px-4 gap-6"
                        >{{ $t('login') }}</Button
                    >
                </div>
            </div>
            <!-- Menu Mobile -->
            <div class="flex gap-2 xl:hidden">
                <SwitchLanguage />
                <div
                    @click="toggleMenu"
                    class="toggle_menu text-4xl flex justify-center items-center hover:scale-105 transition-all dark:border-slate-800 border-[1px] rounded-md w-12 h-11 cursor-pointer"
                >
                    <transition mode="out-in">
                        <IconsClose v-if="menuCheck" class="w-12 h-11" />
                        <IconsMenu v-else class="w-12 h-11" />
                    </transition>
                </div>
            </div>
            <transition>
                <MenuMobile
                    @click="toggleMenu"
                    v-if="menuCheck"
                    class="absolute top-[100%] z-10 right-0 xl:hidden block ease-in-out duration-300"
                />
            </transition>
        </div>
    </transition>
</template>
<script setup>
const menuCheck = ref(false);
//
onMounted(() => {
    window.addEventListener('click', function (event) {
        if (event.target.id !== `toggle-menu`) menuCheck.value = false;
    });
    window.addEventListener('scroll', () => (menuCheck.value = false));
});
function toggleMenu(event) {
    menuCheck.value = !menuCheck.value;
}
</script>
