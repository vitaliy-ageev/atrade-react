import React from 'react';
import classes from "../Details.module.css";

const Type = ({type_id}) => {
    let typeValue = '';
    if (type_id === "1") {
        typeValue = "Покупка"
    } else if (type_id === "2") {
        typeValue = "Продажа"
    }

    return (
        <div className={classes.details_row}>
            <div className={classes.details_row_inner}>
                <div className={classes.details_row_name_block}>
                    <div className={classes.details_row_name}>
                        Тип сделки
                    </div>
                </div>
                <div className={classes.details_row_value_block}>
                    <div className={classes.details_row_value}>
                        {typeValue}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default Type;