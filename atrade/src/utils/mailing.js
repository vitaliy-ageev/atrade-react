export const MAILING = (lang) => {
    if (lang === 'Rus' || !localStorage.getItem('lang')) {
        return [
            { id: "1", title: "Telegram", subtitle: "Рассылка в", icon: "Telegram", link: "/" },
            { id: "2", title: "Вконтакте", subtitle: "Рассылка во", icon: "VkBig", link: "/" },
        ];
    } else if (lang === 'Eng') {
        return [
            { id: "1", title: "Telegram", subtitle: "Newsletter in", icon: "Telegram", link: "/" },
            { id: "2", title: "Vkontakte", subtitle: "Newsletter in", icon: "VkBig", link: "/" },
        ];
    }
}





