<template>
    <div>
        <div
            class="w-full fixed top-0 border-b-2 z-10 bg-white dark:bg-slate-900 dark:text-white dark:border-slate-700"
        >
            <AppHeader />
        </div>
        <slot />
        <AppFooter />
    </div>
</template>
