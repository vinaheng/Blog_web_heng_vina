// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/GlobalStyle/index.scss'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode',
    },
    i18n: {
        /* module options */
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix_except_default',
        locales: [
            {
                code: 'kh-KH',
                iso: 'kh-KH',
                name: 'ភាសារខ្មែរ',
                file: 'kh-KH.json',
            },
            {
                code: 'en-US',
                iso: 'en-US',
                name: 'English(US)',
                file: 'en-US.json',
            },
        ],
        defaultLocale: 'kh-KH',
    },
    // app: {
    //     pageTransition: { name: 'page', mode: 'out-in' },
    // },
});
