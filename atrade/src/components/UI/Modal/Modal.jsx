import React from 'react'
import classes from "./Modal.module.css"

const Modal = ({visibleModal, setVisibleModal, children, ...props}) => {
    let rootClasses = [classes.modal]
    if (visibleModal) {
        rootClasses.push(classes.visible)
        document.body.classList.add('modal');
        document.getElementById("html").classList.add('modal');
        document.getElementById("header").classList.add('modal');
        document.getElementById("header").style.top = window.pageYOffset + "px";
        document.getElementById("main_page").classList.add('modal');
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
        <div className={classes.modal_container}>
            <div className={classes.modal_inner} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal