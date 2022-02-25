import React, { useContext } from 'react';
import classes from './FootNav.module.css'
import FooteNavItem from "./FooteNavItem";
import { LangContext } from '../../context/LangContext';

const FootNav = () => {
    const {items} = useContext(LangContext)

    return (
        <div className={classes.footer_nav}>
            <div className={classes.footer_nav_inner}>
                <FooteNavItem items={items} />
            </div>
        </div>
    );
};

export default FootNav;