import React from 'react';
import classes from './SocialNetworksItem.module.css';
import Icons from "../UI/Icons/Icons";

const SocialNetworksItem = ({items, ...props}) => {
    return (
        <>
            {items.map(item =>
                <a key={item.id} href={item.link} className={classes.social_link} target="_blank" rel="noreferrer">
                    <Icons icon={item.icon} />
                </a>
            )}

        </>
    );
};

export default SocialNetworksItem;