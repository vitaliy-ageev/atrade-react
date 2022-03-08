import React from 'react';
import classes from "./Content.module.css";
import Modal from "../../../UI/Modal/Modal";
import MainContent from "./Main/MainContent";
import RightSidebar from "./Sidebar/RightSidebar";

const Content = ({currentIdea, visibleModal, setVisibleModal}) => {
    return (
        <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
            <div className={classes.idea_content}>
                <MainContent currentIdea={currentIdea}/>
                <RightSidebar visibleModal={visibleModal} setVisibleModal={setVisibleModal} currentIdea={currentIdea} />
            </div>
        </Modal>
    );
};

export default Content;