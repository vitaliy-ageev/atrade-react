import React from 'react';
import classes from './Logotype.module.css';
import Icon from "./Icon";
import Name from "./Name";

const Logotype = (props) => {
    return (
        <a href="/" className={classes.logotype} title={props.title} tabIndex="-2">
            <Icon cls1="fill:#2da98c" cls2="fill:#302213" />
            <Name st0="fill:#3A250F" />
        </a>
    );
};

export default Logotype;