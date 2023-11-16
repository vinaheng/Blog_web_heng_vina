<script setup lang="ts">
type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
};
</script>
<template>
    <div class="flex justify-center border-[1px] dark:border-slate-700 px-2 rounded-md h-11 overflow-hidden">
        <button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <transition mode="out-in">
                <IconsDark v-if="$colorMode.value == 'light'" />
                <IconsLight v-else />
            </transition>
        </button>
    </div>
</template>
