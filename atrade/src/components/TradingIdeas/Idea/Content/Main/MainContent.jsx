import React from 'react';
import classes from "./MainContent.module.css";
import Header from "./Header/Header";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Screenshots from "./Screenshots/Screenshots";
import Notification from "./Notification/Notification";

const MainContent = ({currentIdea}) => {


    return (
        <div className={classes.main_content}>
            <div className={classes.main_content_margin}>
                <div className={classes.main_content_container}>
                    <Header currentIdea={currentIdea} />
                    <Title currentIdea={currentIdea} />
                    <Text currentIdea={currentIdea} />
                    <Screenshots />
                    {/*<Notification />*/}
                </div>
            </div>
        </div>
    );
};

export default MainContent;