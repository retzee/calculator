import React from "react";

import styles from './Calculator.module.css';

export default Calculator = (props) => {
    return (
        <div className={styles.calculator}>{props.children}</div>
    );
}