<script lang="ts" setup>
const localPath = useLocalePath();
</script>
<template>
    <ul
        class="flex-col flex w-[70vw] px-4 pb-4 gap-1 bg-white shadow-md rounded-md capitalize dark:bg-slate-900 border-[1px] dark:border-slate-800"
    >
        <div class="p-2 mb-2 border-b-[1px] text-xl dark:border-b-slate-800 flex justify-between items-center">
            <span> Menu </span>
            <DarkMode class="p-1" />
        </div>
        <NuxtLink
            class="hover:bg-gray-200 hover:rounded-md hover:dark:bg-slate-800 p-2"
            activeClass="active"
            :to="localPath('/')"
            >{{ $t('home') }}</NuxtLink
        >
        <NuxtLink
            class="hover:bg-gray-200 hover:rounded-md hover:dark:bg-slate-800 p-2"
            activeClass="active"
            :to="localPath('/shop')"
            >{{ $t('shop') }}</NuxtLink
        >
        <NuxtLink
            class="hover:bg-gray-200 hover:rounded-md hover:dark:bg-slate-800 p-2"
            activeClass="active"
            :to="localPath('/course')"
            >{{ $t('course') }}</NuxtLink
        >

        <NuxtLink
            class="hover:bg-gray-200 hover:rounded-md hover:dark:bg-slate-800 p-2"
            activeClass="active"
            :to="localPath('/articles')"
            >{{ $t('articles') }}</NuxtLink
        >

        <NuxtLink
            class="hover:bg-gray-200 hover:rounded-md hover:dark:bg-slate-800 p-2"
            activeClass="active"
            :to="localPath('/project')"
            >{{ $t('projects') }}</NuxtLink
        >

        <NuxtLink
            class="hover:bg-gray-200 hover:rounded-md hover:dark:bg-slate-800 p-2"
            activeClass="active"
            :to="localPath('/about_us')"
            >{{ $t('about_us') }}</NuxtLink
        >
    </ul>
</template>
<style scoped>
.active {
    @apply dark:bg-slate-800 bg-slate-300 rounded-md;
}
</style>
