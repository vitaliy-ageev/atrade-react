export const IDEA_NOTIFICATION = (lang) => {
    const systemLang = navigator.language; // ru-RU
    if((!lang && systemLang !== "ru-RU") || lang === "Eng") {
        return {
            text: "Forecasts of financial markets are the private opinion of the author. The current recommendation is not a guide to trading. You must understand the possible risks that may arise when using trading recommendations."
        }
    } else if ((!lang && systemLang === "ru-RU") || lang === "Rus") {
        return {
            text: "Прогнозы финансовых рынков являются частным мнением автора. Текущая рекомендация не представляет собой руководство к торговле. Вы должны понимать возможные риски, которые могут возникнуть при использовании торговых рекомендаций."
        }
    }
}
