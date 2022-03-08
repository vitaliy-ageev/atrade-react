import React from 'react';
import classes from "./Title.module.css";

const Title = ({currentIdea}) => {
    const currentLang = localStorage.getItem("lang");
    const systemLang = navigator.language; // ru-RU
    let title = '';

    if((!currentLang && systemLang !== "ru-RU") || currentLang === "Eng") {
        title = currentIdea.title_eng;
    } else if ((!currentLang && systemLang === "ru-RU") || currentLang === "Rus") {
        title = currentIdea.title_rus;
    }

    return (
        <div className={classes.title}>
            {title}
        </div>
    );
};

export default Title;