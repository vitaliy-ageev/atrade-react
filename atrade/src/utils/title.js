export const TITLE = (page, lang) => {
    // Ideas
    if (page === "ideas" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return { id: 1, title: "Торговые идеи" };
    } else if (page === "ideas" && lang === 'Eng') {
        return { id: 1, title: "Trading Ideas" };
    }
    // Advisor
    if (page === "advisor" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return { id: 1, title: "Торговый советник" };
    } else if (page === "advisor" && lang === 'Eng') {
        return { id: 1, title: "Trading Advisor" };
    }

    // News
    if (page === "news" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return { id: 1, title: "Лента новостей" };
    } else if (page === "news" && lang === 'Eng') {
        return { id: 1, title: "Latest News" };
    }

    // Calendar
    if (page === "calendar" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return { id: 1, title: "Экономический календарь" };
    } else if (page === "calendar" && lang === 'Eng') {
        return { id: 1, title: "Economic Calendar" };
    }

    // Help
    if (page === "help" && (lang === 'Rus' || !localStorage.getItem('lang'))) {
        return { id: 1, title: "Форма обратной связи" };
    } else if (page === "help" && lang === 'Eng') {
        return { id: 1, title: "Feedback Form" };
    }
}





