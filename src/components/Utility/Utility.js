// extract number from string character
const extractNumFromString = (str) => {
    if(str.length > 0){
        const numbers = str.match(/\d+\.?\d*/g);
        if(numbers){
            if(numbers.length > 0){
				//extracted number is valid
                return numbers;
            }
        }
    }
    return;
}

// extract operator from string character
const extractOperatorFromString = (str) => {
    if(str.length > 0){
        const operators = str.match(/[^\d \.]/g);
        if(operators){
            if(operators.length > 0){
				//extracted operator is valid
                return operators;
            }
        }
    }
    return;
}

export {extractNumFromString, extractOperatorFromString};