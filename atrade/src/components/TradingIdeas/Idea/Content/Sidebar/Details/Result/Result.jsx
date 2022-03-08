import React from 'react';
import classes from "../Details.module.css";

const Result = ({price, result_price, type_id}) => {
    let result = '';
    let remain = 0;
    let points = ''
    let rootValueClasses = [classes.details_row_value];

    if (price && result_price) {
        result = (price - result_price).toFixed(4)
        remain = ((result*10000).toFixed(0)) % 10;

        if (remain !== 0 && remain !== 1 && remain < 5 ) {
            points = "пункта"
        } else if (remain == 0 || (remain !== 1 && remain >= 5)) {
            points = "пунктов"
        } else if (remain !== 0 && remain == 1) {
            points = "пункт"
        }

        if (type_id === "1" && result > 0) {
            result = "+" + (result*10000).toFixed(0)
            rootValueClasses.push(classes.plus)
        } else if (type_id === "1" && result < 0) {
            result = (result*10000).toFixed(0)
            rootValueClasses.push(classes.minus)
        }

        if (type_id === "2" && result > 0) {
            result = "-" + (result*10000).toFixed(0)
            rootValueClasses.push(classes.minus)
        } else if (type_id === "2" && result < 0) {
            result = "+" + ((-result)*10000).toFixed(0)
            rootValueClasses.push(classes.plus)
        }
    }


    return (
        <div className={classes.details_row}>
            <div className={classes.details_row_inner}>
                <div className={classes.details_row_name_block}>
                    <div className={classes.details_row_name}>
                        Результат
                    </div>
                </div>
                <div className={classes.details_row_value_block}>
                    <div className={rootValueClasses.join(' ')}>
                        {result + " " + points}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default Result;