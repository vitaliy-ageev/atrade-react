import React from 'react';
import classes from './Header.module.css';
import Logotype from "../../components/Logotype/Logotype";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className="container">
                <div className={classes.header_inner}>
                <Logotype />
                {/*    Header Navigation */}
                {/*    Language Selection*/}

                </div>
            </div>
        </div>
    );
};

export default Header;