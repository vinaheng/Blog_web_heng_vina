<script setup lang="ts">
const title = ref('Project');
useSeoMeta({
    title,
});
interface Post {
    name: string;
    username: string;
}

const { pending, data: posts } = await useLazyFetch<Post[]>('/api/test/');
watch(posts, (newPosts) => {
    // Because posts might start oue null, you won't have access
    // to its contents immediately, but you can watch it.
});
</script>

<template>
    <div v-if="pending" class="text-blue-500 flex text-xl justify-center h-[75vh] items-center flex-col capitalize">
        <IconsLoading class="text-9xl" />
        <span>{{ $t('loading') }}</span>
    </div>
    <div v-else class="text-blue-500 flex text-xl justify-center h-[75vh] items-center flex-col capitalize mx-4">
        <img class="w-[400px]" src="~/assets/img/fuck.jpg" alt="" />
        <span class="mt-10">{{ $t('funny') }}</span>
    </div>
</template>
