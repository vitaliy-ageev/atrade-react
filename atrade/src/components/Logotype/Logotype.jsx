import React from 'react';
import classes from './Logotype.module.css';
import Icon from "./Icon";
import Name from "./Name";
import { Link } from "react-router-dom";

const Logotype = (props) => {
    return (
        <Link to="/ideas" className={classes.logotype} title={props.title} tabIndex="-2">
            <Icon cls1="fill:#2da98c" cls2="fill:#302213" />
            <Name st0="fill:#3A250F" />
        </Link>
    );
};

export default Logotype;