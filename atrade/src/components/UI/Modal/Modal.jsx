import React from 'react'
import classes from "./Modal.module.css"
import {Link, useLocation} from "react-router-dom";

const Modal = ({visibleModal, setVisibleModal, currItem, children, ...props}) => {
    let rootClasses = [classes.modal]
    if (visibleModal) {
        rootClasses.push(classes.visible)
    }

    let href = []
    const onClickModalInner = () => {
        href = window.location.pathname.split('/')[1]
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

    <div id="modal" className={rootClasses.join(' ')} onClick={onClickModalInner}>
          <div className={classes.modal_inner} onClick={(e) => e.stopPropagation()}>
            <h1>
                {currItem.id}
            </h1>
        </div>
    </div>
  )
}

export default Modal