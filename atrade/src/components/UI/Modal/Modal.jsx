import React from 'react'
import classes from "./Modal.module.css"

const Modal = ({visibleModal, setVisibleModal, children}) => {
    let rootClasses = [classes.modal]
    if (visibleModal) {
        rootClasses.push(classes.visible)
        document.body.classList.add('modal');
        document.getElementById("html").classList.add('modal');
        document.getElementById("header").classList.add('modal');
        document.getElementById("header").style.top = window.pageYOffset + "px";
        document.getElementById("main_page").classList.add('modal');
    }

    const onClickModalInner = () => {
        setVisibleModal(false)
        let href = window.location.pathname.split('/')[1]
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
            <div id='modal_inner' className={classes.modal_inner} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal