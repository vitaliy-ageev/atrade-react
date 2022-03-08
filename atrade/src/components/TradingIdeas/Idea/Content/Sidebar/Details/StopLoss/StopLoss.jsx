import React from 'react';
import classes from "../Details.module.css";
import Tooltip from "../../../../../../UI/Tooltip/Tooltip";
import Clip from "../../../../../../UI/Icons/Clip/Clip";

const StopLoss = ({stop_loss}) => {
    let label = "Уровень цены, при котором закроется сделка, в случае успеха"

    const onClickStopLoss = (value) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                let range = document.createRange();
                let sel = window.getSelection();
                let stop_loss_value = document.getElementById('stop_loss_value');
                let stop_loss_block = document.getElementById('stop_loss_block');
                stop_loss_block.classList.add('is-active');
                range.selectNode(stop_loss_value);
                sel.removeAllRanges();
                sel.addRange(range);

                setTimeout(() => {
                    stop_loss_block.classList.remove('is-active');
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
                        Стоп лосс
                    </div>
                    <Tooltip tooltip="stop_loss" label={label} />
                </div>
                <div id="stop_loss_block" className={[classes.details_row_value_block, classes.stop_loss].join(' ')} aria-label="Скопировано" onClick={() => onClickStopLoss(stop_loss)}>
                    <Clip id="stop_loss_clip" />
                    <div id="stop_loss_value" className={classes.details_row_value}>
                        {stop_loss}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default StopLoss;