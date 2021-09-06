
let sayHi = function(){
    console.log(" function expression ");
};

sayHi();
console.log(sayHi);

function ask(question, yes, no) {
    if (question){
        console.log(question);
        console.log("INside if ", yes);
        yes();
    }
    else {
        console.log("INside else ", no);
        no();
    }
}

function showOk() {
    console.log( "You agreed." );
}

showOk();
function showCancel() {
    showOk();
    console.log( "You canceled the execution." );
}


function anonymousReturn(){
    let myFunc = function(){
        console.log("I am anonymous"); 
        return function(){
            console.log(" 2nd level");
        };
    }
    return myFunc;
}
let firstFunc = anonymousReturn;
console.log(firstFunc()());

// // Write a function, myCallback( func, arg). myCallback will call func
// // with the given arg and then log the return value to the console.
// // ➢Test myCallback by calling it with a function that takes a number and returns the cube of the 
// // argument. First write it as a normal named function declaration, then as an anonymous 
// // function expression.

function myCallback(func,arg){
    func(arg);
    console.log(func(arg));
}

function callerFun(arg){
    return arg;
}
myCallback(function(arg){return arg**3},3);

//functions can be called before declaration
abc();
function abc(){
    console.log("abc")
}

console.log(abcd());
//function Expressions cant be called before declaration
let abcd = function(){
    console.log("abc");
    return;
}


function returnFn(x){
    console.log(" Inside ",x)
    return function(y){console.log(" I am being returned",x,y)}
    //return [1,2,3]
}

let returnTest = returnFn(9);
console.log(returnTest);
console.log(returnTest(8));

//let sum = function (){ return 9; }
//let sumWithParams = function (a) {return a; }
let sum = ()=> 9;
let sumWithParams = (a) => a*8;

function sumWithParams(a){
   return a*8;
}

let sumWithMultipleLines = (a,b)=>{ 
    console.log("here ");
     return a;
}

//console.log(sumWithParams(6));
console.log(sumWithMultipleLines(6));



//console.log(sum());

function isEven(num){
    return num%2==0;
}

let isEvenFn = function(num){
    return num%2==0;
}

let isEvenArrow = num => num%2==0;

// console.log(isEven(5));
// console.log(isEvenFn(4));
// console.log(isEvenArrow(9));






