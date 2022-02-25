import React from 'react';
import classes from "../TradingIdeas/TradingIdeasItem.module.css";
import EUR from "../../img/base/currency/svg/EUR/eur.svg";
import IdeaItemChart from '../TradingIdeas/IdeaItemChart';

const TradingIdeasItem = ({ items }) => {

    return (
        <>
            {items.map(item =>
                <div className={classes.ideas_item}>
                    <div className={classes.ideas_item_inner} >
                        {/* Просмтрено */}
                        {/* Активный */}
                        <div className={classes.ideas_item_upper}>
                            <div className={classes.ideas_item_bg} style={{ backgroundImage: `url(${EUR}` }}></div>
                            <div className={classes.ideas_item_name}>{item.name}</div>
                            <div className=
                                {item.type_id === "1"
                                    ?
                                    [classes.ideas_item_type, classes.buy].join(' ')
                                    :
                                    [classes.ideas_item_type, classes.sell].join(' ')
                                }
                            >{item.type}</div>
                        </div>
                        <div className={classes.ideas_item_chart}>
                            <IdeaItemChart svg_path={item.svg_path} id={item.id} type_id={item.type_id} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TradingIdeasItem