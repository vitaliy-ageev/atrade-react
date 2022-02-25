import React, { useEffect, useState, useContext } from 'react';
import classes from './FootLang.module.css';
import { LangContext } from "../../context/LangContext"

const FootLang = () => {
    const lang = localStorage.getItem('lang');
    const [onChange, setOnChange] = useState({});

    useEffect(() => {
        if (lang === 'Rus' || !lang) {
            setOnChange({ title: "Язык:", name: "Rus", icon: "Rus" })
        } else if (lang === "Eng") {
            setOnChange({ title: "Lang:", name: "Eng", icon: "Eng" })
        }
    }, [lang])

    return (
        <div className={classes.footer_lang}>
            <div className={classes.footer_lang_inner}>
                <div className={classes.footer_lang_text}>{onChange.title}</div>
                <div className={classes.footer_lang_reg} >{onChange.name}</div>
            </div>
        </div>
    );
};

export default FootLang;