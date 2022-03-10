import React from 'react';
import classes from "./MainContent.module.css";
import Header from "./Header/Header";
import Title from "./Title/Title";
import Text from "./Text/Text";
import Screenshots from "./Screenshots/Screenshots";
import Notification from "./Notification/Notification";
import Chart from "./Chart/Chart";


const MainContent = ({currentIdea}) => {

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

    return (
        <div className={classes.main_content}>
            <div className={classes.main_content_margin}>
                <div className={classes.main_content_container}>
                    <Header currentIdea={currentIdea} />
                    {/*<Title currentIdea={currentIdea} />*/}
                    <Chart data={initialData} />
                    <Text currentIdea={currentIdea} />
                </div>
            </div>
        </div>
    );
};

export default MainContent;