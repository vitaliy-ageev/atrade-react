import React from 'react';
import classes from "./ModalTradingIdeaItem.module.css";
import Modal from "../UI/Modal/Modal";
import ModalTradingIdeasItemMainContent from "./ModalTradingIdeasItemMainContent";
import ModalTradingIdeasItemRightSidebar from "./ModalTradingIdeasItemRightSidebar";

const ModalTradingIdeaItem = ({currItem, visibleModal, setVisibleModal, ...props}) => {
    return (
        <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal} currItem={currItem}>
            <div className={classes.modal_trading_item_container}>
                <ModalTradingIdeasItemMainContent currItem={currItem}/>
                <ModalTradingIdeasItemRightSidebar visibleModal={visibleModal} setVisibleModal={setVisibleModal} currItem={currItem} />
            </div>
        </Modal>
    );
};

export default ModalTradingIdeaItem;