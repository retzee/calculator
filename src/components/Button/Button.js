import React from "react";

export default Button = (props) => {
    return (
        <button className={props.className} onClick={props.onClick} value={props.btnCategory}>{props.value}</button>
    );
}