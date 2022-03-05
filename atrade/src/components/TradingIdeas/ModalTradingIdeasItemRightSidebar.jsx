import React from 'react';
import classes from "./ModalTradingIdeasItemRightSidebar.module.css";
import Close from "../UI/Icons/Close/Close";

const ModalTradingIdeasItemRightSidebar = ({visibleModal, setVisibleModal, currItem, ...props}) => {
    const onClickCloseIcon = () => {
        setVisibleModal(false)
    }

    return (
        <div className={classes.modal_trading_item_right_sidebar}>
            <div className={classes.modal_trading_item_right_sidebar_close_icon} onClick={onClickCloseIcon}>
                <Close />
            </div>
            <div className={classes.modal_trading_item_right_sidebar_details}>
                <div className={classes.modal_trading_item_right_sidebar_details_inner}>

                </div>
            </div>
        </div>
    );
};

export default ModalTradingIdeasItemRightSidebar;