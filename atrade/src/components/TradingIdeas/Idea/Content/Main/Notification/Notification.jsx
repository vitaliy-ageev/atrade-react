import React, {useEffect, useState} from 'react';
import classes from "./Notification.module.css";
import {IDEA_NOTIFICATION} from "../../../../../../utils/idea_notification";

const Notification = () => {
    const lang = localStorage.getItem('lang');
    const [notification, setNotification] = useState('');
    useEffect(() => {
        setNotification(IDEA_NOTIFICATION(lang))
    }, [lang])

    return (
        <div className={classes.notification}>
            <div className={classes.notification_text}>
                {notification.text}
            </div>
        </div>
    );
};

export default Notification;