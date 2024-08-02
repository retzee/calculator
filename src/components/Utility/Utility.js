
const extractNumFromString = (str) => {
    if(str.length > 0){
        const numbers = str.match(/\d+\.?\d*/g);
        if(numbers){
            if(numbers.length > 0){
				//number valid
                return numbers;
            }
        }
    }
    return;
}

const extractOperatorFromString = (str) => {
    if(str.length > 0){
        const operators = str.match(/[^\d \.]/g);
        if(operators){
            if(operators.length > 0){
				//number valid
                return operators;
            }
        }
    }
    return;
}

export {extractNumFromString, extractOperatorFromString};