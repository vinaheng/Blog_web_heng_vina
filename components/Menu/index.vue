<script lang="ts" setup>
const localPath = useLocalePath();
</script>
<template>
    <ul class="flex gap-4 capitalize items-center">
        <li>
            <NuxtLink activeClass="active" :to="localPath('/')">{{ $t('home') }}</NuxtLink>
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
<style>
.active {
    color: red;
    border-bottom: 3px solid red;
}
</style>
