<template>
    <div class="flex justify-center items-center h-screen bg-slate-900">
        <div class="flex-col">
            <img class="w-[400px]" src="~/assets/img/404.svg" alt="" />
            <div class="flex justify-center my-12">
                <NuxtLink
                    to="/"
                    class="shadow-xl cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-1 px-4 pr-10 rounded-md relative object-center"
                >
                    Go back home
                    <IconsBack class="absolute text-white text-2xl right-2 top-1" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
