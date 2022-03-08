import React from 'react';
import classes from "./User.module.css"
import UserIcon from "../UI/Icons/UserIcon/UserIcon"

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
            <div className={classes.user_name}>Виталий</div>
            <UserIcon id="user_icon" />
        </div>
    );
};

export default User;