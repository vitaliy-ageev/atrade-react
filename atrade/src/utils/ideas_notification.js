export const IDEAS_NOTIFICATION = (lang) => {
    if (lang === 'Rus' || !localStorage.getItem('lang')) {
        return {
            id: "1",
            text: "К сожалению, в данный момент рынок закрыт. Чтобы не пропускать новые идеи, подпишитесь на уведомления в нашем",
            social: "Telegram канале",
            button: "Подписаться",
            path: "/",
        };
    } else if (lang === 'Eng') {
        return {
            id: "2",
            text: "Unfortunately, the market is currently closed. In order not to miss new trading ideas and much more, subscribe to notifications in our",
            social: "Telegram channel",
            button: "Subscribe",
            path: "/",
        };
    }
}
