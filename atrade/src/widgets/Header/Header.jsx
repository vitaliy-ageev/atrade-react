import React from 'react';
import classes from './Header.module.css';
import Logotype from "../../components/Logotype/Logotype";
import NavBar from "../../components/NavBar/NavBar";
import Lang from "../../components/Lang/Lang";

const Header = ({visible, setVisible, ...props}) => {

    return (
        <div {...props} className={classes.header}>
            <div className="container">
                <div className={classes.header_inner}>
                    <Logotype />
                    <NavBar />
                    <Lang visible={visible} setVisible={setVisible} />
                </div>
            </div>
        </div>
    );
};

export default Header;