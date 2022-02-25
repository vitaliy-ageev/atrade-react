import React from 'react';
import classes from './Icon.module.css';

const Icon = (props) => {

    return (
        <svg  className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 465.13 459">
            <defs>
                <style>{`.cls-1{${props.cls1}} .cls-2{${props.cls2}}`}</style>
            </defs>
            <g id="Слой_2" data-name="Слой 2">
                <g id="logo">
                    <path id="A" className="cls-1"
                          d="M34,0l96.5,96.5H174L372.25,294.75V346l92.87,92.88V0ZM368,196l-94-95h94Z"/>
                    <polygon id="T" className="cls-2"
                             points="0.5 165.5 0.5 21.5 438 459 296.5 459 186.25 348.75 79.5 455.5 0 455.5 0 392 115 277 0.5 165.5"/>
                </g>
            </g>
        </svg>
    );
};

export default Icon;