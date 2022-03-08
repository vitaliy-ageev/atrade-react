import React from 'react';
import classes from "../Details.module.css";
import Tooltip from "../../../../../../UI/Tooltip/Tooltip";

const Risk = () => {
    let label = "Максимальный размер инвестиции в сделку"

    return (
        <div className={classes.details_row}>
            <div className={classes.details_row_inner}>
                <div className={classes.details_row_name_block}>
                    <div className={classes.details_row_name}>
                        Риск-менеджмент
                    </div>
                    <Tooltip tooltip="risk" label={label} />
                </div>
                <div className={classes.details_row_value_block}>
                    <div className={classes.details_row_value}>
                        2%
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default Risk;