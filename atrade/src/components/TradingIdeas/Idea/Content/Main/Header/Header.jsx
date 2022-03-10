import React from 'react';
import classes from "./Header.module.css";
import GBP from "../../../../../../img/base/currency/svg/GBP/gbp.svg";
import Down from "../../../../../UI/Icons/Arrows/Down/Down";
import Up from "../../../../../UI/Icons/Arrows/Up/Up";

const Header = ({currentIdea}) => {
    let rootClassRoute= [classes.header_route];
    let rootClassPrice= [classes.header_price];
    const currentLang = localStorage.getItem("lang");
    const systemLang = navigator.language; // ru-RU
    const [lang, setLang] = React.useState(currentLang);
    let text = '';

    React.useEffect(() => {
        setLang(currentLang)
    }, [lang])

    if ((!currentLang && systemLang !== "ru-RU") || currentLang === "Eng") {
        if (currentIdea.type_id === "1") {
            text = "Long"
        } else if (currentIdea.type_id === "2") {
            text = "Short"
        }
    } else if ((!currentLang && systemLang === "ru-RU") || currentLang === "Rus") {
        if (currentIdea.type_id === "1") {
            text = "Покупка"
        } else if (currentIdea.type_id === "2") {
            text = "Продажа"
        }
    }

    if (currentIdea.type_id === "1") {
        rootClassRoute.push(classes.buy)
        rootClassPrice.push(classes.buy)
    } else if (currentIdea.type_id === "2") {
        rootClassRoute.push(classes.sell)
        rootClassPrice.push(classes.sell)
    }

    return (
        <div className={classes.header}>
            <div className={classes.header_inner}>
                <img src={GBP} className={classes.header_img}/>
                <div className={classes.header_name}>
                    {currentIdea.name}
                </div>
                <div className={rootClassRoute.join(' ')}>
                    { currentIdea.type_id === "1" ? <Up /> : currentIdea.type_id === "2" ? <Down /> : ""}
                    <div className={classes.header_route_text}>
                        {text}
                    </div>
                </div>
                <div className={rootClassPrice.join(' ')}>
                    {currentIdea.price}
                </div>
            </div>
        </div>
    );
};

export default Header;