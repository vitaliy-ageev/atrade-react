import React from 'react';
import classes from './CompanyInformation.module.css';

const CompanyInformation = ({ companyInformation, ...props }) => {

    return (
        <div className={classes.company_information}>
            <div className={classes.company_information_inner}>
                <div className={classes.company_information_text}>
                    {companyInformation.text}
                </div>
            </div>
        </div>
    );
};

export default CompanyInformation;