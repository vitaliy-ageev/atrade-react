import React from 'react';
import classes from "./Screenshots.module.css";
import FrstScrn from "../../../../../../img/ideas/screenshots/1.png";
import ScndScrn from "../../../../../../img/ideas/screenshots/2.png";

const Screenshots = () => {
    return (
        <div className={classes.screenshots}>
            <div className={classes.screenshots_inner}>
                <div className={classes.screenshots_before}>
                    <img src={FrstScrn} className={classes.screenshots_before_img}/>
                </div>

                {/*<div className={classes.screenshots_after}>*/}
                {/*    <img src={ScndScrn} className={classes.screenshots_after_img}/>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default Screenshots;