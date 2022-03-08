import React from 'react';
import classes from "./User.module.css"

const User = () => {

    const onHover = (bool) => {
        if (bool) {
            console.log(1)
            document.getElementById('user_icon').style.fill = "#4a4a4a";
        } else {
            document.getElementById('user_icon').style.fill = "#86888B";
        }
    }

    return (
        <div className={classes.user} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
            <div className={classes.user_name}>Vitaliy</div>
            <div className={classes.user_icon}>V</div>
        </div>
    );
};

export default User;