import React from 'react';
import classes from "./Main.module.css";

const Main = ({children, ...props}) => {
    return (
        <div id="main_page" {...props} className={classes.main_page}>
            <div className="container">
                <div className={classes.main_page_inner}>
                    <div className="container_margin">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;