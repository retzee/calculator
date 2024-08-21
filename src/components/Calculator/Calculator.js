import React from "react";

import classes from './Calculator.module.css';

export default Calculator = (props) => {
    return (
        <div className={classes.calculator}>{props.children}</div>
    );
}