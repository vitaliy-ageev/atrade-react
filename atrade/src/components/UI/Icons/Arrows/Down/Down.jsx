import React from 'react';
import classes from "./Down.module.css";

const Down = () => {
    return (
        <svg className={classes.down_arrow} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4V14H4V12H10.5L0 1.5L1.5 0L12 10.5V4H14Z" fill="#fff"></path>
        </svg>
    );
};

export default Down;