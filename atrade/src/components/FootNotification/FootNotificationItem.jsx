import React from 'react';
import classes from './FootNotificationItem.module.css';
import Icons from "../UI/Icons/Icons";

const FootNotificationItem = ({items, ...props}) => {
    return (
        <>
            {items.map(item =>
                <a href={item.link} key={item.id} className={classes.notification_item} target="_blank" rel="noreferrer">
                    <Icons icon={item.icon} setVkBigStyle={true} setTgStyle={true} />
                    <div className={classes.notification_item_content}>
                        <div className={classes.notification_item_subtitle}>
                            {item.subtitle}
                        </div>
                        <div className={classes.notification_item_text}>
                            {item.title}
                        </div>
                    </div>
                </a>
            )}
        </>
    );
};

export default FootNotificationItem;