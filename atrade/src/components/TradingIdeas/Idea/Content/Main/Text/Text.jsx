import React from 'react';
import classes from "./Text.module.css";

const Text = ({currentIdea}) => {
    let id = new Date().getTime();
    const currentLang = localStorage.getItem("lang");
    const systemLang = navigator.language; // ru-RU
    const [lang, setLang] = React.useState(currentLang);
    let text = '';

    React.useEffect(() => {
        setLang(currentLang)
    }, [lang])

    if((!currentLang && systemLang !== "ru-RU") || currentLang === "Eng") {
        text = `${currentIdea.text_eng}`.split('<p>');
    } else if ((!currentLang && systemLang === "ru-RU") || currentLang === "Rus") {
        text = `${currentIdea.text_rus}`.split('<p>');
    }

    if(text[0] === "") {
        text.splice(0,1)
    }

    return (
        <div className={classes.text}>
            {text.map(p =>
                <p key={id++}>{p}</p>
            )}
        </div>
    );
}

export default Text;