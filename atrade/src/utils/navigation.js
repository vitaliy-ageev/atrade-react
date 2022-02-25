export const NAVIGATION = (lang) => {
    if (lang === 'Rus' || !localStorage.getItem('lang')) {
        return [
            { id: 1, name: "Идеи", active: false, path: "ideas" },
            { id: 2, name: "Советник", active: false, path: "robot" },
            { id: 3, name: "Новости", active: false, path: "news" },
            { id: 4, name: "Календарь", active: false, path: "calendar" },
            { id: 6, name: "Помощь", active: false, path: "help" },
        ];
    } else if (lang === 'Eng') {
        return [
            { id: 1, name: "Ideas", active: false, path: "ideas" },
            { id: 2, name: "Advisor", active: false, path: "robot" },
            { id: 3, name: "News", active: false, path: "news" },
            { id: 4, name: "Calendar", active: false, path: "calendar" },
            { id: 6, name: "Help", active: false, path: "help" },
        ];
    }
}





