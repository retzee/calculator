import React  from "react";
import Button from "../Button/Button";
import classes from "./ButtonWrap.module.css";
import {btnList, operatorList} from "./ButtonArray";

const ButtonWrap = (props) => {
    const sendKeyPress = (event) => {
        const keyPressed = event.target.innerHTML; //get key pressed
        const btnCategory = event.target.value; //get button category value
        props.onKeyPress(keyPressed, btnCategory);
    }

    return (
        <div className={classes.calculator__keys}>
            {
                btnList.map((element, index) => {
                    let classValue = '';
                    let getBtnCategory = '';
	
					//Loop thru operator keys to get data
                    if( operatorList.includes(element) ){
                        classValue = `${classes.calculator__key} ${classes.calculator__key__operator}`;
                        getBtnCategory = 2;
                    }
                    else if(element === "="){
                        className = `${classes.calculator__key} ${classes.calculator__key__enter}`;
                        getBtnCategory = 3;
                    }
                    else{
                        if(element === "AC"){
                            className = `${classes.calculator__key} ${classes.calculator__key__clear}`;
                            getBtnCategory = 4;
                        }
                        else if(element === "."){
                            className = `${classes.calculator__key} ${classes.calculator__key__dot}`;
                            getBtnCategory = 5;
                        }
                        else{
                            className = `${styles.calculator__key}`;
                            getBtnCategory = 1;
                        }
                    }

                    return (
                        <Button
                            id={index}
                            key={index}
                            value={element}
                            className={className}
                            onClick={sendKeyPress}
                            btnCategory={getBtnCategory}
                        />
                    );
                })
            }
        </div>
   );
}

export default ButtonWrap;