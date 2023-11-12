<script lang="ts" setup>
const localPath = useLocalePath();
</script>
<template>
    <ul class="flex-col flex w-[50vw] bg-white shadow-md rounded-md capitalize">
        <NuxtLink class="hover:bg-gray-200 p-2" activeClass="active" :to="localPath('/')">{{ $t('home') }}</NuxtLink>

        <NuxtLink class="hover:bg-gray-200 p-2" activeClass="active" :to="localPath('/course')">{{
            $t('course')
        }}</NuxtLink>

        <NuxtLink class="hover:bg-gray-200 p-2" activeClass="active" :to="localPath('/articles')">{{
            $t('articles')
        }}</NuxtLink>

        <NuxtLink class="hover:bg-gray-200 p-2" activeClass="active" :to="localPath('/project')">{{
            $t('projects')
        }}</NuxtLink>

        <NuxtLink class="hover:bg-gray-200 p-2" activeClass="active" :to="localPath('/about_us')">{{
            $t('about_us')
        }}</NuxtLink>
    </ul>
</template>
<style scoped>
.active {
    color: red;
    font: bold;
    background: rgb(231, 228, 228);
}
</style>
