import React from 'react';
import classes from "../Details.module.css";

const Date = ({date}) => {
    return (
        <div className={classes.details_row}>
            <div className={classes.details_row_inner}>
                <div className={classes.details_row_name_block}>
                    <div className={classes.details_row_name}>
                        Дата публикации
                    </div>
                </div>
                <div className={classes.details_row_value_block}>
                    <div className={classes.details_row_value}>
                        {date}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default Date;