import React from 'react';
import classes from "./ModalTradingIdeasItemRightSidebar.module.css";
import Close from "../UI/Icons/Close/Close";

const ModalTradingIdeasItemRightSidebar = ({visibleModal, setVisibleModal, currItem, ...props}) => {
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