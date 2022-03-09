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
        { time: '2018-12-12', value: 32.51 },
        { time: '2018-12-13', value: 32.51 },
        { time: '2018-12-14', value: 32.51 },
        { time: '2018-12-15', value: 32.51 },
        { time: '2018-12-16', value: 32.51 },
        { time: '2018-12-17', value: 32.51 },
        { time: '2018-12-18', value: 32.51 },
        { time: '2018-12-19', value: 32.51 },
        { time: '2018-12-20', value: 32.51 },
        { time: '2018-12-21', value: 32.51 },
        { time: '2018-12-22', value: 32.51 },
        { time: '2018-12-23', value: 31.11 },
        { time: '2018-12-24', value: 27.02 },
        { time: '2018-12-25', value: 27.32 },
        { time: '2018-12-26', value: 25.17 },
        { time: '2018-12-27', value: 28.89 },
        { time: '2018-12-28', value: 25.46 },
        { time: '2018-12-29', value: 23.92 },
        { time: '2018-12-30', value: 18.68 },
        { time: '2018-12-31', value: 20.67 },
        { time: '2019-01-01', value: 22.67 },
        { time: '2019-01-02', value: 27.67 },
        { time: '2019-01-03', value: 30.67 },
        { time: '2019-01-04', value: 23.67 },
        { time: '2019-01-05', value: 29.67 },
        { time: '2019-01-06', value: 50.67 },
        { time: '2019-01-07', value: 100.67 },
        { time: '2019-01-08', value: 32.67 },
        { time: '2019-01-09', value: 22.67 },
        { time: '2019-01-10', value: 15.67 },
        { time: '2019-01-11', value: 10.67 },
        { time: '2019-01-12', value: 50.67 },
        { time: '2019-01-13', value: 30.67 },
        { time: '2019-01-14', value: 20.67 },
        { time: '2019-01-15', value: 22.67 },
        { time: '2019-01-16', value: 60.67 },
        { time: '2019-01-17', value: 27.67 },
        { time: '2019-01-18', value: 50.67 },
        { time: '2019-01-19', value: 100.67 },
        { time: '2019-01-20', value: 30.67 },
        { time: '2019-01-21', value: 25.67 },
        { time: '2019-01-22', value: 24.67 },
        { time: '2019-01-23', value: 23.67 },
        { time: '2019-01-24', value: 22.67 },
        { time: '2019-01-25', value: 28.67 },
    ];

    return (
        <div className={classes.main_content}>
            <div className={classes.main_content_margin}>
                <div className={classes.main_content_container}>
                    <Header currentIdea={currentIdea} />
                    <Title currentIdea={currentIdea} />
                    {/*<Screenshots />*/}
                    <Chart data={initialData} />
                    <Text currentIdea={currentIdea} />
                    {/*<Notification />*/}
                </div>
            </div>
        </div>
    );
};

export default MainContent;