import React, { useState } from 'react';
import classes from "./LangButton.module.css";
import FlagIcons from "./FlagIcons";

const LangButton = ({ children, icon, setIcon, title, setTitle, setStyle, ...props }) => {
    const [hover, setHover] = useState(false);
    const isEmpty = (obj) => {
        for (let i in obj) if (obj.hasOwnProperty(i)) return false;
        return true;
    }
    const isHover = () => {
        if (!isEmpty(setStyle)) {
            setHover(false)
        } else {
            setHover(true)
        }
    }

    return (
        <div {...props} style={setStyle} className={classes.lang_button} onMouseEnter={isHover} onMouseLeave={() => setHover(false)}>
            <div className={classes.lang_button_name}>
                {localStorage.getItem('lang') === "Rus" ? "Язык:" : "Lang:"}
            </div>

            <div className={classes.lang_button_icon}>
                <FlagIcons hover={hover} icon={localStorage.getItem('lang') ? localStorage.getItem('lang') : icon} />
            </div>
        </div>
    );
};

export default LangButton;