import React from 'react';
import classes from "../Details.module.css";
import Tooltip from "../../../../../../UI/Tooltip/Tooltip";
import Clip from "../../../../../../UI/Icons/Clip/Clip";

const Price = ({price}) => {
    let label = "Уровень цены открытия сделки";

    const onClickPrice = (value) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                let range = document.createRange();
                let sel = window.getSelection();
                let price_value = document.getElementById('price_value');
                let price_block = document.getElementById('price_block');
                price_block.classList.add('is-active');
                range.selectNode(price_value);
                sel.removeAllRanges();
                sel.addRange(range);

                setTimeout(() => {
                    price_block.classList.remove('is-active');
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
                        Цена открытия
                    </div>
                    <Tooltip tooltip="price" label={label} />
                </div>
                <div id="price_block" className={[classes.details_row_value_block, classes.price].join(' ')} aria-label="Скопировано" onClick={() => onClickPrice(price)}>
                    <Clip id="price_clip" />
                    <div id="price_value" className={classes.details_row_value}>
                        {price}
                    </div>
                </div>
            </div>
            <div className={classes.details_row_border}></div>
        </div>
    );
};

export default Price;