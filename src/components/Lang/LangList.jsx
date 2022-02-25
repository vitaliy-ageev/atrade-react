import React from 'react';
import classes from './LangList.module.css'
import LangItem from "./LangItem";

const LangList = ({ items, visible, setVisible, icon, setIcon, title, setTitle }) => {
    const rootClasses = [classes.lang_list_block];
    let listStyle = false;
    if (visible) {
        rootClasses.push(classes.active);
        listStyle = true;
    }

    return (
        <div className={rootClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
            <div className={classes.lang_list_block_inner}>
                <LangItem title={title} setTitle={setTitle} icon={icon} setIcon={setIcon} visible={visible} setVisible={setVisible} listStyle={listStyle} items={items} />
            </div>
        </div>
    );
};

export default LangList;