import React, {useContext} from 'react';
import classes from './FootNotification.module.css';
import FootNotificationItem from "./FootNotificationItem";
import { LangContext } from '../../context/LangContext';

const FootNotification = () => {
    const { mailing } = useContext(LangContext)

    return (
        <div className={classes.footer_notification}>
            <div className={classes.footer_notification_inner}>
                <FootNotificationItem items={mailing} />
            </div>
        </div>
    );
};

export default FootNotification;