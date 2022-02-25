import React from 'react';
import classes from './MainTitle.module.css';

const MainTitle = ({children, title}) => {
    return (
        <div className={classes.left_title}>
            <div className={classes.left_title_block}>
                <div className={classes.left_title_text}>
                    {title}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainTitle;