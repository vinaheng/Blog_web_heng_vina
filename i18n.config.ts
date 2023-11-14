import kh from '~/locales/kh-KH.json';
import en from '~/locales/en-US.json';
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'kh',
    messages: {
        en,
        kh,
    },
}));
