import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Notification.module.css";

const Notification = ({setVisibleModal}) => {
    const onClickLink = () => {
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
        <div className={classes.warning_risk}>
            <div className={classes.warning_risk_text}>
                Напоминаем: финансовый рынок – это сложный инструмент, который, будучи маржинальным, имеет высокий уровень риска. Вы должны понимать, можете ли позволить принять риск потери средств. Пожалуйста, прочтите наше
                <Link to="/robot" className={classes.warning_risk_link} onClick={onClickLink}> «Уведомление о  рисках»</Link>.
            </div>
        </div>
    );
};

export default Notification;