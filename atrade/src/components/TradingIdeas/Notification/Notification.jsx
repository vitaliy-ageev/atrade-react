import React, { useEffect, useState } from 'react'
import classes from "./Notification.module.css"
import { IDEAS_NOTIFICATION } from "../../../utils/ideas_notification"

const Notification = ({ ...props }) => {
    const lang = localStorage.getItem('lang');
    const [notification, setNotification] = useState('');
    useEffect(() => {
        setNotification(IDEAS_NOTIFICATION(lang))
    }, [lang])

    return (
        <div className={classes.notification}>
            <div className={classes.notification_inner}>
                <div className={classes.notification_text}>
                    {notification.text}
                    <a href={notification.path} className={classes.notification__lt} target="_blank" tabIndex="-2" rel="noreferrer">
                        {' ' + notification.social}
                    </a>
                </div>
                <a href={notification.path} className={classes.notification_link} target="_blank" tabIndex="-2" rel="noreferrer">
                    {notification.button}
                </a>
            </div>
        </div>
    )
}

export default Notification