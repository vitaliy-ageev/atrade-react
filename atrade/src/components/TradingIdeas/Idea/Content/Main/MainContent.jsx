import React from 'react';
import classes from "./MainContent.module.css";
import Header from "./Header/Header";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Screenshots from "./Screenshots/Screenshots";
import Notification from "./Notification/Notification";
import Chart from "./Chart/Chart";


const MainContent = ({ currentIdea }) => {

    const initialData = [

        { time: '2022-01-06', value: 1.12994 },
        { time: '2022-01-07', value: 1.13604 },
        { time: '2022-01-10', value: 1.13285 },
        { time: '2022-01-11', value: 1.13742 },
        { time: '2022-01-12', value: 1.14407 },
        { time: '2022-01-13', value: 1.14531 },
        { time: '2022-01-14', value: 1.14157 },
        { time: '2022-01-17', value: 1.14060 },
        { time: '2022-01-18', value: 1.13271 },
        { time: '2022-01-19', value: 1.13424 },
        { time: '2022-01-20', value: 1.13091 },
        { time: '2022-01-21', value: 1.13465 },
        { time: '2022-01-24', value: 1.13257 },
        { time: '2022-01-25', value: 1.13022 },
        { time: '2022-01-26', value: 1.12441 },
        { time: '2022-01-27', value: 1.11430 },
        { time: '2022-01-28', value: 1.11471 },
        { time: '2022-01-31', value: 1.12330 },
        { time: '2022-02-01', value: 1.12717 },
        { time: '2022-02-02', value: 1.13064 },
        { time: '2022-02-03', value: 1.14407 },
        { time: '2022-02-04', value: 1.14504 },
        { time: '2022-02-07', value: 1.14407 },
        { time: '2022-02-08', value: 1.14144 },
        { time: '2022-02-09', value: 1.14199 },
        { time: '2022-02-10', value: 1.14254 },
        { time: '2022-02-11', value: 1.13451 },
        { time: '2022-02-14', value: 1.13077 },
        { time: '2022-02-15', value: 1.13562 },
        { time: '2022-02-16', value: 1.13770 },
        { time: '2022-02-17', value: 1.13645 },
        { time: '2022-02-18', value: 1.13230 },
        { time: '2022-02-21', value: 1.13091 },
        { time: '2022-02-22', value: 1.13257 },
        { time: '2022-02-23', value: 1.13064 },
        { time: '2022-02-24', value: 1.11956 },
        { time: '2022-02-25', value: 1.12674 },
        { time: '2022-02-28', value: 1.12222 },
        { time: '2022-03-01', value: 1.11242 },
        { time: '2022-03-02', value: 1.11261 },
        { time: '2022-03-03', value: 1.10654 },
        { time: '2022-03-04', value: 1.10576 },
        { time: '2022-03-07', value: 1.08542 },
        { time: '2022-03-09', value: 1.08953 },
        { time: '2022-03-10', value: 1.10552 },
    ];


    const barsData = [
        { time: '2022-01-10', open: 1.13515, high: 1.13596, low: 1.12872, close: 1.13251 },
        { time: '2022-01-11', open: 1.13251, high: 1.13768, low: 1.13125, close: 1.13665 },
        { time: '2022-01-12', open: 1.13665, high: 1.14538, low: 1.13550, close: 1.14423 },
        { time: '2022-01-13', open: 1.14423, high: 1.14825, low: 1.14365, close: 1.14549 },
        { time: '2022-01-14', open: 1.14549, high: 1.14836, low: 1.13998, close: 1.14147 },
        { time: '2022-01-17', open: 1.14147, high: 1.14331, low: 1.13929, close: 1.14021 },
        { time: '2022-01-18', open: 1.14021, high: 1.14216, low: 1.13148, close: 1.13251 },
        { time: '2022-01-19', open: 1.13251, high: 1.13573, low: 1.13194, close: 1.13447 },
        { time: '2022-01-20', open: 1.13447, high: 1.13699, low: 1.13045, close: 1.13102 },
        { time: '2022-01-21', open: 1.13102, high: 1.13596, low: 1.13022, close: 1.13435 },
        { time: '2022-01-24', open: 1.13435, high: 1.13447, low: 1.12941, close: 1.13228 },
        { time: '2022-01-25', open: 1.13228, high: 1.13286, low: 1.12654, close: 1.12999 },
        { time: '2022-01-26', open: 1.12999, high: 1.13113, low: 1.12378, close: 1.12424 },
        { time: '2022-01-27', open: 1.12424, high: 1.12447, low: 1.11345, close: 1.11460 },
        { time: '2022-01-28', open: 1.11460, high: 1.11735, low: 1.11218, close: 1.11483 },
        { time: '2022-01-31', open: 1.11483, high: 1.12482, low: 1.12340, close: 1.12344 },
        { time: '2022-02-01', open: 1.12344, high: 1.12792, low: 1.12206, close: 1.12711 },
        { time: '2022-02-02', open: 1.12711, high: 1.13297, low: 1.13029, close: 1.13033 },
        { time: '2022-02-03', open: 1.13033, high: 1.14515, low: 1.12677, close: 1.14331 },
        { time: '2022-02-04', open: 1.14331, high: 1.14836, low: 1.14137, close: 1.14503 },
        { time: '2022-02-07', open: 1.14629, high: 1.14629, low: 1.14193, close: 1.14411 },
        { time: '2022-02-08', open: 1.14411, high: 1.14492, low: 1.13975, close: 1.14136 },
        { time: '2022-02-09', open: 1.14136, high: 1.14480, low: 1.14032, close: 1.14227 },
        { time: '2022-02-10', open: 1.14136, high: 1.14940, low: 1.13770, close: 1.14296 },
        { time: '2022-02-11', open: 1.14296, high: 1.14308, low: 1.13297, close: 1.13437 },
        { time: '2022-02-14', open: 1.13437, high: 1.13688, low: 1.12815, close: 1.13056 },
        { time: '2022-02-15', open: 1.13056, high: 1.13676, low: 1.12976, close: 1.13561 },
        { time: '2022-02-16', open: 1.13561, high: 1.13963, low: 1.13492, close: 1.13745 },
        { time: '2022-02-17', open: 1.13745, high: 1.13848, low: 1.13263, close: 1.13561 },
        { time: '2022-02-18', open: 1.13561, high: 1.13768, low: 1.13171, close: 1.13194 },
        { time: '2022-02-21', open: 1.13194, high: 1.13894, low: 1.13068, close: 1.13068 },
        { time: '2022-02-22', open: 1.13068, high: 1.13676, low: 1.12861, close: 1.13228 },
        { time: '2022-02-23', open: 1.13228, high: 1.13584, low: 1.13022, close: 1.13022 },
        { time: '2022-02-24', open: 1.13022, high: 1.13090, low: 1.11081, close: 1.11931 },
        { time: '2022-02-25', open: 1.11931, high: 1.12734, low: 1.11609, close: 1.12711 },
        { time: '2022-02-28', open: 1.11173, high: 1.12459, low: 1.11173, close: 1.12172 },
        { time: '2022-03-01', open: 1.12172, high: 1.12321, low: 1.10920, close: 1.11196 },
        { time: '2022-03-02', open: 1.11196, high: 1.11437, low: 1.10587, close: 1.11161 },
        { time: '2022-03-03', open: 1.11161, high: 1.11218, low: 1.10357, close: 1.10679 },
        { time: '2022-03-04', open: 1.10679, high: 1.10679, low: 1.08887, close: 1.09289 },
        { time: '2022-03-07', open: 1.09289, high: 1.09335, low: 1.08118, close: 1.08520 },
        { time: '2022-03-08', open: 1.08520, high: 1.09565, low: 1.08485, close: 1.08944 },
        { time: '2022-03-09', open: 1.08944, high: 1.10943, low: 1.08910, close: 1.10736 },
        { time: '2022-03-10', open: 1.10736, high: 1.11218, low: 1.09771, close: 1.09852 },
        { time: '2022-03-11', open: 1.09852, high: 1.10126, low: 1.09829, close: 1.10116 },
    ]

    return (
        <div className={classes.main_content}>
            <div className={classes.main_content_margin}>
                <div className={classes.main_content_container}>
                    <Header currentIdea={currentIdea} />
                    <Chart initialData={initialData} barsData={barsData} isTrue={false} />
                    <Text currentIdea={currentIdea} />
                </div>
            </div>
        </div>
    );
};

export default MainContent;