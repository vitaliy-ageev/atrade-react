import React from 'react';
import classes from "./RightSidebar.module.css";
import Title from "./Title/Title";
import Details from "./Details/Details";
import Notification from "./Notification/Notification";
import Close from "../../../../UI/Icons/Close/Close";

const RightSidebar = ({setVisibleModal, currentIdea}) => {
    return (
        <div className={classes.right_sidebar}>
            <div id="right_sidebar" className={classes.right_sidebar_details}>
                <div className={classes.right_sidebar_details_inner}>
                <Title />
                <Details currentIdea={currentIdea}/>
                <Notification setVisibleModal={setVisibleModal} />
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;