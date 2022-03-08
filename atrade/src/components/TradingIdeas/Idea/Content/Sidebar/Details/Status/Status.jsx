import React from 'react';
import classes from "../Details.module.css";
import Tooltip from "../../../../../../UI/Tooltip/Tooltip";

const Status = ({active_status, work_status, close_status, cancel_status}) => {
    let value = '';
    let rootValueClasses = [classes.details_row_value_block];
    let label = "Если статус не является «Активным», то вход в рынок по данной идее запрещён. Подробнее о статусах читайте в мануале «Как торговать по идеям»";

    if (active_status == 1 && work_status == 0 && close_status == 0 && cancel_status == 0) {
        value = 'Активный'
        rootValueClasses.push(classes.new)
    } else if (active_status == 0 && work_status == 1 && close_status == 0 && cancel_status == 0) {
        value = 'В работе'
        rootValueClasses.push(classes.in_work)
    } else if (active_status == 0 && work_status == 0 && close_status == 1 && cancel_status == 0) {
        value = 'Завершён'
        rootValueClasses.push(classes.closed)
    } else if (active_status == 0 && work_status == 0 && close_status == 0 && cancel_status == 1) {
        value = 'Отменён'
        rootValueClasses.push(classes.cancel)
    }

    return (
        <div className={classes.details_row}>
            <div className={classes.details_row_inner}>
                <div className={classes.details_row_name_block}>
                    <div className={classes.details_row_name}>
                        Статус
                    </div>
                    <Tooltip tooltip="status" label={label} />
                </div>
                <div className={rootValueClasses.join(' ')}>
                    <div className={classes.details_row_value}>
                        {value}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default Status;