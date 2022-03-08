import React from 'react';
import classes from "../Details.module.css";

const Currency = ({currency}) => {
    return (
        <div className={classes.details_row}>
            <div className={classes.details_row_inner}>
                <div className={classes.details_row_name_block}>
                    <div className={classes.details_row_name}>
                        Валютная пара
                    </div>
                </div>
                <div className={classes.details_row_value_block}>
                    <div className={classes.details_row_value}>
                        {currency}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default Currency;