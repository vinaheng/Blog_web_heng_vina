<template>
    <div class="bg-slate-700 capitalize">
        <div class="container p-6 grid xl:grid-cols-3 m-auto">
            <div class="flex flex-col text-white justify-center xl:items-center py-2 border-b-2 xl:border-none">
                <div class="flex flex-col gap-2">
                    <img class="w-[120px]" src="~/assets/img/Blog_pic.svg" alt="" />
                    <span>{{ $t('heng_vina') }} {{ $t('founder') }}</span>
                    <span>hengvina67@gmail.com</span>
                </div>
            </div>
            <div class="flex flex-col text-white justify-center xl:items-center py-2 border-b-2 xl:border-none">
                <div class="flex flex-col gap-2">
                    <h2 class="text-xl text-gray-400">{{ $t('more') }}</h2>
                    <span>{{ $t('contact') }}</span>
                    <span>{{ $t('our_project') }}</span>
                    <span>{{ $t('term_of_service') }} </span>
                </div>
            </div>
            <div class="flex flex-col text-white justify-center xl:items-center py-2">
                <div class="flex flex-col gap-2">
                    <h2 class="text-xl text-gray-400">{{ $t('social') }}</h2>
                    <div class="grid grid-cols-6 gap-4">
                        <a href="">
                            <img
                                class="max-h-10 hover:scale-105 transition-all"
                                src="~/assets/img/facebook.png"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img
                                class="max-h-10 hover:scale-105 transition-all"
                                src="~/assets/img/Instagram_icon.webp"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img
                                class="max-h-10 hover:scale-105 transition-all"
                                src="~/assets/img/linkedin.png"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img
                                class="max-h-10 hover:scale-105 transition-all"
                                src="~/assets/img/telegram.png"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img
                                class="max-h-10 hover:scale-105 transition-all"
                                src="~/assets/img/youtube.png"
                                alt=""
                            />
                        </a>
                        <a href="">
                            <img class="max-h-10 hover:scale-105 transition-all" src="~/assets/img/github.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
