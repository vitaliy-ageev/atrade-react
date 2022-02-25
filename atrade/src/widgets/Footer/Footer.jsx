import React, {useContext} from 'react';
import classes from './Footer.module.css';
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import FootNav from "../../components/FootNav/FootNav";
import FootNotification from "../../components/FootNotification/FootNotification";
import BorderInline from "../../components/UI/borders/BorderInline";
import CompanyInformation from "../../components/CompanyInformation/CompanyInformation";
import FootCompany from "../../components/FootCompany/FootCompany";
import { LangContext } from '../../context/LangContext';

const Footer = () => {
    const { companyInformation } = useContext(LangContext)

    return (
        <div className={classes.footer}>
            <div className="container">
                <div className={classes.footer_inner}>
                    <div className="container_margin">
                        <SocialNetworks />
                        <FootNav />
                        <FootNotification />
                        <BorderInline />
                        <CompanyInformation companyInformation={companyInformation} />
                        <BorderInline />
                        <FootCompany />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;