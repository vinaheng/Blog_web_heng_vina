<script setup lang="ts">
const localPath = useLocalePath();

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
    <!-- <div class="text-9xl flex justify-center h-[75vh] items-center">
        <IconsLoading class="text-9xl" />
    </div> -->

    <div class="max-w-[700px] m-auto flex flex-col justify-center p-5 mt-20">
        <img class="object-cover rounded-md max-h-[300px]" src="~/assets/img/front_cover.png" alt="" />
        <div class="mt-10 grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div class="flex flex-col items-center xl:border-r-2 border-b-2 xl:border-b-0">
                <img class="object-cover rounded-full h-40 w-40" src="~/assets/img/Logo.png" alt="" />
                <h2>{{ $t('heng_vina') }} {{ $t('founder') }}</h2>
                <div class="my-2"></div>
                <h2>{{ $t('like') }}</h2>
            </div>
            <div class="xl:col-span-2">
                <div class="m-auto">
                    <h2>{{ $t('blog_mission') }}</h2>
                    <hr class="mt-2" />

                    <div class="flex flex-col font-bold text-header gap-2 mt-4 text-red-600 capitalize">
                        <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/course')">
                            {{ $t('course') }} <IconsNext />
                        </NuxtLink>

                        <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/articles')">
                            {{ $t('articles') }} <IconsNext />
                        </NuxtLink>

                        <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/project')">
                            {{ $t('projects') }} <IconsNext />
                        </NuxtLink>

                        <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/about_us')">
                            {{ $t('about_us') }} <IconsNext />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <div className="flex flex-row">
    <div class="flex flex-col justify-center items-center basis-1/3">
        <img class="object-cover rounded-full h-40 w-40" src="~/assets/img/Logo.png" alt="" />
        <h2>{{ $t('heng_vina') }} {{ $t('founder') }}</h2>
        <hr />
        <h2>{{ $t('like') }}</h2>
    </div>

    <div class="basis-2/3">
        <h2>{{ $t('blog_mission') }}</h2>
        <hr class="mt-2" />

        <div class="flex flex-col font-bold text-header gap-2 mt-4 text-red-600 capitalize">
            <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/course')">
                {{ $t('course') }} <IconsNext />
            </NuxtLink>

            <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/articles')">
                {{ $t('articles') }} <IconsNext />
            </NuxtLink>

            <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/project')">
                {{ $t('projects') }} <IconsNext />
            </NuxtLink>

            <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/about_us')">
                {{ $t('about_us') }} <IconsNext />
            </NuxtLink>
        </div>
    </div>
</div> -->
