import React from 'react';
import classes from "./Chart.module.css";

const Chart = ({ id, type, svg_path }) => {
    switch (type) {
        case "up":
            return <svg className={classes.chart_container} viewBox="0 0 338 150">
                <polyline points={svg_path} fill="none" stroke="#22a053" strokeWidth="1.5" strokeLinejoin="round"></polyline>
                <defs><linearGradient id={id + "IC"} x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: "#22a053", stopOpacity: "0.24" }}></stop><stop offset="100%" style={{ stopColor: "#22a053", stopOpacity: "0" }}></stop></linearGradient></defs>
                <path d={`M 0,150 L ${svg_path}, 150`} fill={`url(#${id + "IC"})`}></path>
            </svg>
        case "down":
            return <svg className={classes.chart_container} viewBox="0 0 338 150">
                <polyline points={svg_path} fill="none" stroke="#E01F19" strokeWidth="1.5" strokeLinejoin="round"></polyline>
                <defs><linearGradient id={id + "IC"} x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: "rgb(224, 31, 25)", stopOpacity: "0.24" }}></stop><stop offset="100%" style={{ stopColor: "224, 31, 25", stopOpacity: "0" }}></stop></linearGradient></defs>
                <path d={`M 0,150 L ${svg_path}, 150`} fill={`url(#${id + "IC"})`}></path>
            </svg>
        default: <></>
    }

    return (
        <></>
    )
};

export default Chart;