import React from 'react';
import classes from "./Details.module.css";
import Status from "./Status/Status";
import Date from "./Date/Date";
import Currency from "./Currency/Currency";
import Type from "./Type/Type";
import Price from "./Price/Price";
import TakeProfit from "./TakeProfit/TakeProfit";
import StopLoss from "./StopLoss/StopLoss";
import Risk from "./Risk/Risk";
import Result from "./Result/Result";

const Details = ({currentIdea}) => {
    const active_status= currentIdea.active_status;
    const work_status= currentIdea.work_status;
    const close_status= currentIdea.close_status;
    const cancel_status= currentIdea.cancel_status;
    const date = currentIdea.full_date
    const currency = currentIdea.name
    const type_id= currentIdea.type_id;
    const price = currentIdea.price
    const take_profit = currentIdea.take_profit
    const stop_loss = currentIdea.stop_loss
    const result_price = currentIdea.result_price

    return (
        <div className={classes.details}>
            <Status active_status={active_status} work_status={work_status} close_status={close_status} cancel_status={cancel_status} />
            {date ? <Date date={date} /> : "" }
            {currency ? <Currency currency={currency} /> : "" }
            {type_id ? <Type type_id={type_id} /> : "" }
            {price ? <Price  price={price} /> : "" }
            {take_profit ? <TakeProfit take_profit={take_profit} /> : "" }
            {stop_loss ? <StopLoss stop_loss={stop_loss} /> : "" }
            <Risk />
            {result_price ? <Result price={price} result_price={result_price} type_id={type_id} /> : "" }
        </div>
    )
}

export default Details