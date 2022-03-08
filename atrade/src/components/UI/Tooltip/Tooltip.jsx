import React from 'react';
import classes from "./Tooltip.module.css";
import Question from "../Icons/Question/Question";

const Tooltip = ({tooltip, label}) => {

    return (
        <span id="tooltip" className={classes.tooltip}>
            <Question />
            <span id={tooltip} className={classes.tooltip_info} aria-label={label} ></span>
        </span>
    );
};

export default Tooltip;