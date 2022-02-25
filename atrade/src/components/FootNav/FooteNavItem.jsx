import React from 'react';
import classes from './FootNavItem.module.css'
import { Link } from "react-router-dom";

const FooteNavItem = ({ items, ...props }) => {
    return (
        <>
            {items.map(item =>
                <Link to={__dirname + item.path} key={item.id} className={classes.footer_nav_link}>
                    {item.name}
                </Link>
            )}
        </>
    );
};

export default FooteNavItem;