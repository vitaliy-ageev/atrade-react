import React from 'react';
import classes from "./ModalTradingIdeasItemMainContent.module.css";
import Down from "../UI/Icons/Arrows/Down/Down";
import GBP from "../../img/base/currency/svg/GBP/gbp.svg";
import FrstScrn from "../../img/ideas/screenshots/1.png";
import ScndScrn from "../../img/ideas/screenshots/2.png";

const ModalTradingIdeasItemMainContent = ({currItem}) => {
    let rootClassRoute= [classes.modal_trading_item_main_content_header_route];
    let rootClassPrice= [classes.modal_trading_item_main_content_header_price];
    if (currItem) {
        rootClassRoute.push(classes.sell)
        rootClassPrice.push(classes.sell)
    }

    return (
        <div className={classes.modal_trading_item_main_content}>
            <div className={classes.modal_trading_item_main_content_margin}>
                <div className={classes.modal_trading_item_main_content_container}>

                    {/*Header*/}
                    <div className={classes.modal_trading_item_main_content_header}>
                        <div className={classes.modal_trading_item_main_content_header_inner}>
                            <img src={GBP} className={classes.modal_trading_item_main_content_header_img}/>
                            <div className={classes.modal_trading_item_main_content_header_name}>
                                GBPUSD
                            </div>
                            <div className={rootClassRoute.join(' ')}>
                                <Down />
                                <div className={classes.modal_trading_item_main_content_header_route_text}>
                                    Короткая
                                </div>
                            </div>
                            <div className={rootClassPrice.join(' ')}>
                                1.28436
                            </div>
                        </div>
                    </div>

                    {/*Title*/}
                    <div className={classes.modal_trading_item_main_content_title}>
                        Фунт скорректировался после ярко выраженного снижения
                    </div>

                    {/*Content*/}
                    <div className={classes.modal_trading_item_main_content_text}>
                        <p>GBP/USD продолжает снижение уже третью неделю подряд. На данном этапе пара сформировала несколько разворотных паттернов, в том числе «Перевёрнутый молот». Учитывая стремительную потерю позиций фунтом стерлингом, ожидать отработки сигнала по разворотным паттернам не приходится. Торговая ситуация может продолжиться незначительной коррекцией и дальнейшим падением котировок. Целевым ориентиром для снижения выступает отметка 1,2700.</p>
                        <p>Напомним, что для евро и фунта геополитика на минувшей неделе была доминирующим фактором. Фунт продавали по всему рынку на фоне напряжённых переговоров по Brexit. Для заключения соглашения Германия попросила Британию об уступках, но премьер-министр Великобритании Борис Джонсон настаивал на том, чтобы страны Евросоюза согласились на его условия сделки. Если же не удастся преодолеть разногласия к 15 октября, то тогда Британия выйдет из Евросоюза без сделки.</p>
                    </div>

                    {/*Screenshots*/}
                    <div className={classes.modal_trading_item_main_content_screenshots}>
                        <div className={classes.modal_trading_item_main_content_screenshots_inner}>
                            <div className={classes.modal_trading_item_main_content_screenshots_before}>
                                <img src={FrstScrn} className={classes.modal_trading_item_main_content_screenshots_before_img}/>
                            </div>
                            <div className={classes.modal_trading_item_main_content_screenshots_after}>
                                <img src={ScndScrn} className={classes.modal_trading_item_main_content_screenshots_after_img}/>
                            </div>

                        </div>
                    </div>

                    {/*Notification*/}
                    <div className={classes.modal_trading_item_main_content_notification}>
                        <div className={classes.modal_trading_item_main_content_notification_text}>
                            Прогнозы финансовых рынков являются частным мнением автора. Текущая рекомендация не представляет собой руководство к торговле. Вы должны понимать возможные риски, которые могут возникнуть при использовании торговых рекомендаций
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModalTradingIdeasItemMainContent;