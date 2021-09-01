//function declaration
function sum(num1, num2){
    console.log(num1,num2);
    return num1-num2;
}

//function call
let total = sum(5,5); 
console.log(total);

let totalWithoutParams = sum();
console.log(totalWithoutParams);

let singleParam = sum(1);
console.log(singleParam);//NaN

let withNull = sum(null,1);
console.log(withNull);// -1

/**
 * Function to without return
 * @param {number} num1 
 * @param {number} num2 
 */
function sumWithoutReturn(num1, num2){
    total= num1+num2;
   // console.log(total);
}
console.log(sumWithoutReturn(1,2)); //output ?
/**
 * Default values for parameters
 * @param {number} num1 
 * @param {number} num2 
 * @returns sum
 */
function sumWithDefaults(num1=2,num2=4){
    return num1+num2;
    //return "a"+true;
}
console.log(sumWithDefaults(3,4));//7
console.log(sumWithDefaults(0,0));//0
console.log(sumWithDefaults());//6
console.log(sumWithDefaults(3));//7
console.log(sumWithDefaults(null));//4
console.log(sumWithDefaults("a"));//a4
console.log(sumWithDefaults("a"));//NaN
console.log(true-"a")

/**
 * Multiple Returns
 * @param {number} num 
 * @returns whether the number is odd or even
 */
function oddEven(num){
    if (!num) return;
    if(num%2==0) return "Even";
    else return "Odd"
}

function multipleReturns(num){
    if(true)
        return 5;
    console.log(num);
    return 9;
  
}

console.log(oddEven(0));//undefined
console.log(oddEven(-4));//Even

console.log(multipleReturns(3));

function longreturn(num1,num2){
    return 
    num1 +      num2;
}
console.log(longreturn(1,2));

function isPrime(n)
