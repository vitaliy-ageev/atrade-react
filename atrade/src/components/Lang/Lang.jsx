import React, { useState } from 'react';
import classes from './Lang.module.css'
import LangButton from "./LangButton";
import LangList from "./LangList";

const Lang = ({ visible, setVisible }) => {
    const lang = localStorage.getItem('lang');
    const [items, setItems] = useState([
        { id: "1", name: "Рус", icon: "Rus", title: "Язык:" },
        { id: "2", name: "Eng", icon: "Eng", title: "Lang:" },
    ]);

    let setStyle = [];
    if (items.length <= 1) {
        setVisible(false);
        setStyle = {
            cursor: 'default',
        }
    }

    const sortedItems = (lang) => {
        items.sort((a, b) => (a.icon === lang) ? -1 : 1);
        setVisible(true)
    }

    const [icon, setIcon] = useState('Rus');
    const [title, setTitle] = useState('Язык:');

    return (
        <div className={classes.lang}>
            <div className={classes.lang_inner}>
                <LangButton setStyle={setStyle} title={title} setTitle={setTitle} icon={icon} setIcon={setIcon} onClick={() => sortedItems(lang)}>
                </LangButton>
                <LangList title={title} setTitle={setTitle} items={items} setItem={setItems} icon={icon} setIcon={setIcon} visible={visible} setVisible={setVisible} />
            </div>
        </div>
    );
};

export default Lang;