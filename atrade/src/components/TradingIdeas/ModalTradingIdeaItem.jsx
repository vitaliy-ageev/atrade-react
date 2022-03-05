import React from 'react';
import classes from "./ModalTradingIdeaItem.module.css";
import Modal from "../UI/Modal/Modal";

const ModalTradingIdeaItem = ({currItem, visibleModal, setVisibleModal, ...props}) => {
    return (
        <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal} currItem={currItem}>
            {currItem.id}
        </Modal>
    );
};

export default ModalTradingIdeaItem;