<script setup>
import { useI18n } from 'vue-i18n';
const { locales, locale, setLocale } = useI18n();
const dropdownVisible = ref(false);
function toggleDropdown() {
    dropdownVisible.value = !dropdownVisible.value;
}
</script>

<template>
    <div class="flex items-center w-full">
        <div id="dropdown-button" @click="toggleDropdown" class="border-2 rounded p-2 cursor-pointer relative">
            <div class="flex gap-4">
                <span class="hidden xl:block">{{ locale === 'en-US' ? 'English-US' : 'ភាសារខ្មែរ' }}</span>
                <span class="text-2xl"><IconsUsa v-if="locale === 'en-US'" /> <IconsCambodia v-else /></span>
            </div>
            <div
                v-show="dropdownVisible"
                id="dropdown-menu"
                class="absolute top-[120%] border border-gray-300 bg-white shadow-md right-0"
            >
                <div
                    v-for="(item, index) in locales"
                    :key="index"
                    class="py-2 px-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                    @click="setLocale(item.code)"
                >
                    <span class="mr-2">{{ item.name }} </span>
                    <span class="text-2xl" v-if="item.code === 'en-US'"><IconsUsa /></span>
                    <span class="text-2xl" v-else><IconsCambodia /></span>
                </div>
            </div>
        </div>
    </div>
</template>
