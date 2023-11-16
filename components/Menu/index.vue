<script lang="ts" setup>
const localPath = useLocalePath();
</script>
<template>
    <ul class="flex gap-4 capitalize items-center">
        <li>
            <NuxtLink activeClass="active" :to="localPath('/')">{{ $t('home') }}</NuxtLink>
        </li>
        <li>
            <NuxtLink activeClass="active" :to="localPath('/shop')">{{ $t('shop') }}</NuxtLink>
        </li>
        <li>
            <NuxtLink activeClass="active" :to="localPath('/course')">{{ $t('course') }}</NuxtLink>
        </li>
        <li>
            <NuxtLink activeClass="active" :to="localPath('/articles')">{{ $t('articles') }}</NuxtLink>
        </li>
        <li>
            <NuxtLink activeClass="active" :to="localPath('/project')">{{ $t('projects') }}</NuxtLink>
        </li>
        <li>
            <NuxtLink activeClass="active" :to="localPath('/about_us')">{{ $t('about_us') }}</NuxtLink>
        </li>
    </ul>
</template>
<style scoped>
.active {
    @apply text-red-600  dark:text-yellow-400
    pb-4   
    border-l-[5px] border-l-transparent
    border-b-[1px] border-b-red-600 dark:border-b-yellow-400
    border-r-[5px] border-r-transparent;
}
</style>
