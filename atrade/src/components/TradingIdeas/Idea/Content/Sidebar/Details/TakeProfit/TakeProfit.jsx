import React from 'react';
import classes from "../Details.module.css";
import Tooltip from "../../../../../../UI/Tooltip/Tooltip";
import Clip from "../../../../../../UI/Icons/Clip/Clip";

const TakeProfit = ({take_profit}) => {
    let label = "Уровень цены, при котором закроется сделка, в случае убытка"

    const onClickTakeProfit = (value) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                let range = document.createRange();
                let sel = window.getSelection();
                let take_profit_value = document.getElementById('take_profit_value');
                let take_profit_block = document.getElementById('take_profit_block');
                take_profit_block.classList.add('is-active');
                range.selectNode(take_profit_value);
                sel.removeAllRanges();
                sel.addRange(range);

                setTimeout(() => {
                    take_profit_block.classList.remove('is-active');
                }, 700)
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }

    return (
        <div className={classes.details_row}>
            <div className={classes.details_row_inner}>
                <div className={classes.details_row_name_block}>
                    <div className={classes.details_row_name}>
                        Тейк профит
                    </div>
                    <Tooltip tooltip="take_profit" label={label} />
                </div>
                <div id="take_profit_block" className={[classes.details_row_value_block, classes.take_profit].join(' ')} aria-label="Скопировано" onClick={() => onClickTakeProfit(take_profit)}>
                    <Clip id="take_profit_clip" />
                    <div id="take_profit_value" className={classes.details_row_value}>
                        {take_profit}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default TakeProfit;