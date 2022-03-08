import React from 'react';
import classes from "./User.module.css"

const User = () => {

    return (
        <div className={classes.user}>
            <div className={classes.user_name}>Vitaliy</div>
            <div className={classes.user_icon}>V</div>
        </div>
    );
};

export default User;