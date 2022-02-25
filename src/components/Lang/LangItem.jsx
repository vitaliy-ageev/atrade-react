import React from 'react';
import classes from './LangItem.module.css';
import FlagIcons from "./FlagIcons";
const LangItem = ({items, listStyle, icon, setIcon, title, setTitle, visible, setVisible,}) => {
    const onClickItem = (title, icon ) => {
        setTitle(title);
        setIcon(icon);
        setVisible(false);
        localStorage.setItem('lang', icon)
    }

    return (
        <>
            {items.map(
                item =>
                    <div key={item.id} className={classes.lang_list_item} onClick={() => onClickItem(item.title, item.icon)} icon={icon}>
                        <div  className={classes.lang_list_item_name}>
                            {item.name}
                        </div>
                        <div className={classes.lang_list_item_icon}>
                             <FlagIcons listStyle={listStyle} icon={item.icon}/>
                        </div>
                    </div>
                )
            }
        </>
    )
}


export default LangItem;