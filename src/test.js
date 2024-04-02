/*
const v1 = "2 + 5";

const v2 = Function("return "+v1)();

console.log(v2);
*/

const extractNumFromString = (str) => {
    if(str.length > 0){
        const numbers = str.match(/\d+\.?\d*/g);
        if(numbers){
            if(numbers.length > 0){
                return numbers;
            }
            return;
        }
        return;
    }
    return;
}

const extractOperatorFromString = (str) => {
    if(str.length > 0){
        const operators = str.match(/[^\d \.]/g);
        if(operators){
            if(operators.length > 0){
                return operators;
            }
            return;
        }
        return;
    }
    return;
}


//const strVal = '24-5+8/3';
//const str = '24-5+8/3*2+10';
const str = '2.355 + 34.099';

//const ops = extractOperatorFromString(str);
const nums = extractNumFromString(str);


//console.log('n => '+nums.length);
console.log('n => '+nums);
console.log(nums[1]);
const dotSign = '.';

if( nums[1].includes(dotSign) ){
    console.log('num2 HAS DOT '+nums[1]);
  }
  else{
    console.log('num2 HAS NO DOT '+nums[1]);
  }

//console.log(ops.length);

/*
nums.map((e,i) => {
 console.log(e+' = '+i);
});
*/


/*

console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
//console.log(nums.length);
*/

//const str = '5.14 + 4 - 36';
//const str = '24-5+8/3*2+10';


//const str = '24-5+8/3*2+10';


//const str = '240 +';
//const operations = str.match(/[^\d \.]/g);
//const operands = str.match(/\d+\.?\d*/g).map(Number);
//console.log(operations);

/*
if(operations !== null){
    console.log('operations is NOT '+operations);
}
else{
    console.log('operations is '+operations);
}
*/

/*
const var1 = '240.201829920';
const var2 = '2.902';

console.log( parseFloat(var2) );
console.log( Number(var2) );
console.log( Math.pow(100, 1) );

*/