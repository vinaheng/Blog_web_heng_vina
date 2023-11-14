<template>
    <div>
        <div
            class="w-full fixed top-0 border-b-2 z-10 bg-white dark:bg-slate-900 dark:text-white dark:border-slate-700"
        >
            <div class="absolute z-30 top-0 scroll-indicator scroll-indicator"></div>
            <AppHeader />
        </div>
        <slot />
        <AppFooter />
    </div>
</template>
