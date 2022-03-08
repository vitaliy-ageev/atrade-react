import React from 'react';
import classes from "./RightSidebar.module.css";
import Title from "./Title/Title";
import Details from "./Details/Details";
import Notification from "./Notification/Notification";
import Close from "../../../../UI/Icons/Close/Close";

const RightSidebar = ({visibleModal, setVisibleModal, currentIdea}) => {
    const onClickCloseIcon = () => {
        let href = window.location.pathname.split('/')[1]
        setVisibleModal(false)
        document.getElementById("modal").scrollTo(0,0)
        document.body.classList.remove('modal');
        document.getElementById("html").classList.remove('modal');
        document.getElementById("header").classList.remove('modal');
        document.getElementById("main_page").classList.remove('modal');
        document.getElementById("header").style.top = "0px";
        window.history.pushState(null, null, `/${href}`);
    }

    return (
        <div className={classes.right_sidebar}>
            <div className={classes.right_sidebar_close_icon} onClick={onClickCloseIcon}>
                <Close />
            </div>
            <div className={classes.right_sidebar_details}>
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