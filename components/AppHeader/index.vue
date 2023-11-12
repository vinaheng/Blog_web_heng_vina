<script setup lang="ts">
const { menuState, toggleMenu } = useMenu();
</script>
<template>
    <div class="container m-auto flex items-center text-header justify-between px-4">
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
        <MenuMobile
            @click="toggleMenu()"
            v-show="menuState"
            class="absolute top-[100%] z-10 right-0 xl:hidden block ease-in-out duration-300"
        />
    </div>
</template>
