import React from 'react';
import classes from "./Main.module.css";
import Lang from "../../components/Lang/Lang";
import { LangContext } from '../../context/LangContext';

const Main = ({ children, ...props }) => {
    const { visible, setVisible } = React.useContext(LangContext);

    return (
        <div id="main_page" {...props} className={classes.main_page}>
            <div className="container">
                <div className={classes.main_page_inner}>
                    <div className="container_margin">
                        <Lang visible={visible} setVisible={setVisible} />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;