<script setup>
import { useI18n } from 'vue-i18n';
const { locales, locale, setLocale } = useI18n();
const dropdownVisible = ref(false);
function toggleDropdown() {
    dropdownVisible.value = !dropdownVisible.value;
}
onMounted(() => {
    window.addEventListener('scroll', () => (dropdownVisible.value = false));
    window.addEventListener('click', (event) => {
        if (event.target.className != '[object SVGAnimatedString]' && dropdownVisible.value) {
            toggleDropdown();
        }
    });
});
</script>

<template>
    <div class="flex items-center">
        <div
            id="dropdown-button"
            @click="toggleDropdown"
            class="rounded-md p-2 cursor-pointer relative dark:border-slate-700 border-[1px] dark:text-white"
        >
            <div class="flex gap-4">
                <transition mode="out-in">
                    <span v-if="locale === 'en'" class="hidden xl:block">English-US</span>
                    <span v-else class="hidden xl:block">ភាសារខ្មែរ</span>
                </transition>
                <span class="text-2xl">
                    <transition mode="out-in"><IconsUsa v-if="locale === 'en'" /> <IconsCambodia v-else /></transition
                ></span>
            </div>
            <transition>
                <div
                    v-show="dropdownVisible"
                    id="dropdown-menu"
                    class="absolute top-[120%] bg-white right-0 dark:bg-slate-900 shadow-md rounded-md border-[1px] border-gray-200 dark:border-slate-700"
                >
                    <div
                        v-for="(item, index) in locales"
                        :key="index"
                        class="py-2 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-800 flex justify-between items-center"
                        @click="setLocale(item.code)"
                    >
                        <span class="mr-2">{{ item.name }} </span>
                        <span class="text-2xl" v-if="item.code === 'en'"><IconsUsa /></span>
                        <span class="text-2xl" v-else><IconsCambodia /></span>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
