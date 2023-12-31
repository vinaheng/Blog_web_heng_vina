// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    css: ['~/assets/GlobalStyle/index.scss'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: '',
    },
    i18n: {
        locales: [
            {
                code: 'kh',
                name: 'ភាសារខ្មែរ',
                iso: 'en-US',
            },
            {
                code: 'en',
                name: 'English(US)',
                iso: 'kh-KH',
            },
        ],
        defaultLocale: 'kh',
        vueI18n: './i18n.config.ts',
    },
});
