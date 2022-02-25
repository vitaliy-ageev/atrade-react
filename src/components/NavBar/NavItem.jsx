import React from 'react';
import classes from './NavItem.module.css';
import { Link } from "react-router-dom";

const NavItem = ({ items, ...props }) => {
    const thisPathname = window.location.pathname.split('/')[1];

    return (
        <>
            {items.map(item =>
                <Link to={__dirname + item.path}
                    key={item.id}
                    tabIndex="-2"
                    className={
                        item.path === thisPathname
                            ?
                            [classes.navigation_link, classes.active].join(' ')
                            :
                            classes.navigation_link
                    }
                >
                    {item.name}
                </Link>
            )}
        </>
    )
}

export default NavItem;