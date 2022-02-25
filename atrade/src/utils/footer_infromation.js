export const FOORER_INFROMATION = (lang) => {
    if (lang === 'Rus' || !localStorage.getItem('lang')) {
        return { id: "1", text: "Мы не предлагаем своим клиентам финансовые продукты, в том числе контракты на разницу цен и другие сложные финансовые инструменты. Торговля на CFD отличается высоким уровнем риска, поскольку использование кредитного плеча может сказаться на вашем финансовом положении как положительно, так и отрицательно." };
    } else if (lang === 'Eng') {
        return { id: "1", text: "We do not offer our clients financial products, including CFD's and other complex financial instruments. Trading CFD's carries a high level of risk as the use of leverage can either positively or negatively affect your financial situation." };
    }
}





