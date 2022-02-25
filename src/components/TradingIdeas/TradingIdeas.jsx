import React from 'react';
import classes from './TradingIdeas.module.css';
import TradingNotification from '../TradingIdeas/TradingNotification';

const TradingIdeas = (props) => {
    return (
        <div className={classes.ideas}>
            <div className={classes.ideas_inner}>
                <TradingNotification />
                {/* Идеи */}
                {/* Заглушка сигналов */}
                {/* Стрелки для пагинации */}
            </div>
        </div>
    );
};

export default TradingIdeas;

