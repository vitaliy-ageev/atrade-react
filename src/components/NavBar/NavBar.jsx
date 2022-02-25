import React, { useContext } from 'react';
import classes from './NavBar.module.css';
import NavItem from "./NavItem";
import { LangContext } from '../../context/LangContext';


const NavBar = () => {
    const {items} = useContext(LangContext)


    return (
        <div className={classes.navigation}>
            <div className={classes.navigation_inner}>
                <NavItem items={items} />
            </div>
        </div>
    );
};

export default NavBar;