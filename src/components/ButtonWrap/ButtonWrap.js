import React  from "react";
import Button from "../Button/Button";
import styles from "./ButtonWrap.module.css";
import {btnList, operatorList} from "./ButtonArray";

const ButtonWrap = (props) => {
    const sendKeyPress = (event) => {
        const keyPressed = event.target.innerHTML; //get key pressed
        const btnCategory = event.target.value; //get button category value
        props.onKeyPress(keyPressed, btnCategory);
    }

    return (
        <div className={styles.calculator__keys}>
            {
                btnList.map((element, index) => {
                    let classValue = '';
                    let getBtnCategory = '';
	
					//Loop through operator keys to get data
                    if( operatorList.includes(element) ){
                        classValue = `${styles.calculator__key} ${styles.calculator__key__operator}`;
                        getBtnCategory = 2;
                    }
                    else if(element === "="){
                        className = `${styles.calculator__key} ${styles.calculator__key__enter}`;
                        getBtnCategory = 3;
                    }
                    else{
                        if(element === "AC"){
                            className = `${styles.calculator__key} ${styles.calculator__key__clear}`;
                            getBtnCategory = 4;
                        }
                        else if(element === "."){
                            className = `${styles.calculator__key} ${styles.calculator__key__dot}`;
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