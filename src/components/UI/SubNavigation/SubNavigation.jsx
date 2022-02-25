import React from 'react';
import classes from './SubNavigation.module.css';

const SubNavigation = ({items}) => {
    return (
        <div className={classes.subnavigation}>
            <div className={classes.subnavigation_inner}>
                {items.map(item =>
                    <div key={item.id} className={classes.subnavigation_link_block} onClick={(e) => e.preventDefault()}>
                        <a href={item.link} className={classes.subnavigation_link}>{item.title}</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubNavigation;