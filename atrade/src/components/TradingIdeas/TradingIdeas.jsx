import React from 'react';
import classes from './TradingIdeas.module.css';
import TradingNotification from '../TradingIdeas/TradingNotification';
import TradingIdeasItem from "../TradingIdeas/TradingIdeasItem";

const TradingIdeas = (props) => {
    const items = [
        {
            id: "1",
            curr_id: "1",
            name: "EUR/USD",
            type: "Повышение",
            type_id: "1",
            img: "EUR/eur.svg",
            svg_path: "0,120 28,125  56, 128 84,119 113,105 141,110 169,95 197,100 225,105 253,55  282,45 310,60 338,65 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "2",
            curr_id: "2",
            name: "AUD/USD",
            type: "Понижение",
            type_id: "2",
            img: "EUR/eur.svg",
            svg_path: "0,100 28,108  56,100 84,103 113,112 141,118 169,85 197,80 225,110 253,68  282,83 310,96  338,90 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "3",
            curr_id: "3",
            name: "EUR/USD",
            type: "Повышение",
            type_id: "1",
            img: "EUR/eur.svg",
            svg_path: "0,120 28,125  56, 128 84,119 113,105 141,110 169,95 197,100 225,105 253,55  282,45 310,60 338,65 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },

        {
            id: "4",
            curr_id: "4",
            name: "GBP/USD",
            type: "Понижение",
            type_id: "2",
            img: "EUR/eur.svg",
            svg_path: "0,115 28,115  56,125 84,120 113,122 141,123 169,120 197,100 225,110 253,80  282,85 310,50  338,60 338",
            active_status: "1",
            work_status: "",
            close_status: "",
            cancel_status: "",
            result_plus: "",
            result_minus: "",
            screen: "",
            scree_text: "",
            price: "",
            take_profit: "",
            stop_loss: "",
            risk: "",
            title: "",
            text: "",
            preview_text: "",
            date: "",
            full_date: "",
            year: "",
        },
    ];

    return (
        <div className={classes.ideas}>
            <div className={classes.ideas_inner}>
                <TradingNotification />
                <TradingIdeasItem items={items} />
                {/* Заглушка сигналов */}
                {/* Стрелки для пагинации */}
            </div>
        </div>
    );
};

export default TradingIdeas;

