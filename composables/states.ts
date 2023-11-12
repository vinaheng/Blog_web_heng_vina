export const useMenu = () => {
    const menuState = ref(false);

    const toggleMenu = () => {
        menuState.value = !menuState.value;
    };

    return {
        menuState,
        toggleMenu,
    };
};
