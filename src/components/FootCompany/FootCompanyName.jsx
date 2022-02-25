import React from 'react';
import classes from './FootCompanyName.module.css';
import { Link } from "react-router-dom";

const FootCompanyName = () => {
    const year = new Date().getFullYear();

    return (
        <div className={classes.foot_company_name}>
            <div className={classes.foot_company_text}>
                © {year}, <Link to="/ideas" className={classes.foot_company_link}>Atrade</Link>
            </div>
            <div className={classes.age_limit}>
                18+
            </div>
        </div>
    );
};

export default FootCompanyName;