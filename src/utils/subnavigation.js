export const SUBNAVIGATION = (page, lang) => {
    // Ideas
    if (page === "ideas" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return [
            { id: "1", title: "Как торговать по идеям", link: "" },
            { id: "2", title: "История идей", link: "" },
            { id: "3", title: "Помощь", link: "" },
        ];
    } else if (page === "ideas" && lang === 'Eng') {
        return [
            { id: "1", title: "Gow to trade on the ideas", link: "" },
            { id: "2", title: "History of ideas", link: "" },
            { id: "3", title: "Help", link: "" },
        ];
    }

    // Advisor
    if (page === "advisor" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return [
            { id: "1", title: "О торговых советники", link: "" },
            { id: "2", title: "Советник под заказ", link: "" },
            { id: "3", title: "Частые вопросы", link: "" },
            { id: "4", title: "Помощь", link: "" },
        ];
    } else if (page === "advisor" && lang === 'Eng') {
        return [
            { id: "1", title: "About trading advisor", link: "" },
            { id: "2", title: "Advisor on order", link: "" },
            { id: "3", title: "FAQ", link: "" },
            { id: "4", title: "Help", link: "" },
        ];
    }

    // News
    if (page === "news" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return [
            { id: "1", title: "Все новости", link: "" },
            { id: "2", title: "Валютный рынок", link: "" },
            { id: "3", title: "Сырьевой рынок", link: "" },
            { id: "4", title: "Экономика", link: "" },
        ];
    } else if (page === "news" && lang === 'Eng') {
        return [
            { id: "1", title: "All news", link: "" },
            { id: "2", title: "Currency market", link: "" },
            { id: "3", title: "Commodity market", link: "" },
            { id: "4", title: "Economy", link: "" },
        ];
    }
}





