<script setup lang="ts">
const localPath = useLocalePath();
const { t } = useI18n();
useSeoMeta({
    title: '💁‍♂️Vina Blog👉' + t('home') + '💞',
});
</script>

<template>
    <vue-scroll-indicator height="7px" color="#11998e" background="none"> </vue-scroll-indicator>
    <transition appear name="page">
        <div v-show="true" class="max-w-[800px] m-auto flex flex-col justify-center p-5 pt-20 mt-14 dark:text-white">
            <img class="object-cover rounded-md max-h-[300px]" src="~/assets/img/front_cover.png" alt="" />
            <div class="mt-10 grid grid-cols-1 xl:grid-cols-3 gap-4 mb-10">
                <div
                    class="flex flex-col items-center xl:border-r-2 border-b-2 xl:border-b-0 pb-2 dark:border-slate-700"
                >
                    <div class="relative">
                        <img
                            v-show="true"
                            class="object-cover rounded-full h-40 w-40"
                            src="~/assets/img/Logo.png"
                            alt=""
                        />
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-20 top-0"
                        ></span>
                    </div>
                    <h2 class="mt-4">{{ $t('heng_vina') }} {{ $t('founder') }}</h2>
                    <div class="mt-2 mb-1 flex-row flex">
                        <span class="border-2 w-[40px] border-red-700 rounded-md"></span>
                    </div>
                    <h2>{{ $t('like') }}</h2>
                </div>
                <div class="xl:col-span-2">
                    <div class="m-auto">
                        <h2 class="text-justify">{{ $t('blog_mission') }}</h2>
                        <hr class="mt-2 dark:border-slate-700" />
                        <div
                            class="flex justify-center flex-col font-bold text-header mt-4 text-red-600 dark:text-yellow-400 capitalize"
                        >
                            <NuxtLink class="flex items-center" activeClass="active" :to="localPath('/shop')">
                                {{ $t('shop') }} <IconsNext />
                            </NuxtLink>
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
            <h2 class="flex justify-center">{{ $t('join_our_social_networks') }}</h2>
            <hr class="my-10 dark:border-slate-700" />
            <div class="grid grid-cols-6 gap-4">
                <a href="">
                    <img class="max-h-10 hover:scale-105 transition-all" src="~/assets/img/facebook.png" alt="" />
                </a>
                <a href="">
                    <img
                        class="max-h-10 hover:scale-105 transition-all"
                        src="~/assets/img/Instagram_icon.webp"
                        alt=""
                    />
                </a>
                <a href="">
                    <img class="max-h-10 hover:scale-105 transition-all" src="~/assets/img/linkedin.png" alt="" />
                </a>
                <a href="">
                    <img class="max-h-10 hover:scale-105 transition-all" src="~/assets/img/telegram.png" alt="" />
                </a>
                <a href="">
                    <img class="max-h-10 hover:scale-105 transition-all" src="~/assets/img/youtube.png" alt="" />
                </a>
                <a href="" class="dark:text-white">
                    <IconsGithub />
                </a>
            </div>
            <hr class="m-10 dark:border-slate-700" />
            <h2 class="flex justify-center text-xl text-justify">{{ $t('about_quote') }}</h2>
        </div>
    </transition>
</template>
