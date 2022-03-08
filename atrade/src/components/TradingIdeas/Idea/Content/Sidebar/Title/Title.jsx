import React from 'react';
import classes from "./Title.module.css";

const Title = () => {
    return (
        <div className={classes.title_block}>
            <div className={classes.title}>
                Детали идеи
            </div>
            <div className={classes.title_border}></div>
        </div>
    );
};

export default Title;