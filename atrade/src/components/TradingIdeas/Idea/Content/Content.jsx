import React from 'react';
import classes from "./Content.module.css";
import Modal from "../../../UI/Modal/Modal";
import MainContent from "./Main/MainContent";
import RightSidebar from "./Sidebar/RightSidebar";
import Close from "../../../UI/Icons/Close/Close";

const Content = ({currentIdea, visibleModal, setVisibleModal}) => {
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
        <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
            <div className={classes.idea_content}>
                <div className={classes.close_icon} onClick={onClickCloseIcon}>
                    <Close />
                </div>
                <MainContent currentIdea={currentIdea}/>
                {/*<RightSidebar setVisibleModal={setVisibleModal} currentIdea={currentIdea} />*/}
            </div>
        </Modal>
    );
};

export default Content;