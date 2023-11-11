<template>
    <div class="container m-auto flex items-center text-header justify-between">
        <NuxtLink to="/"><img src="~/assets/img/Blog_pic.png" class="h-14" alt="" /></NuxtLink>
        <div class="flex gap-10">
            <Menu />
            <div class="gap-6 flex">
                <SwitchLanguage />
                <Button class="bg-blue-900 text-white rounded-sm py-2 px-4">{{ $t('login') }}</Button>
            </div>
        </div>
    </div>
</template>
