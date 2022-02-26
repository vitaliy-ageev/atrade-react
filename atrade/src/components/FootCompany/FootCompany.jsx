import React from 'react';
import classes from './FootCompany.module.css';
import FootCompanyName from "./FootCompanyName";
import FootLang from "./FootLang";

const FootCompany = () => {
    return (
        <div className={classes.footCompany}>
            <FootCompanyName />
            <FootLang />
        </div>
    );
};

export default FootCompany;