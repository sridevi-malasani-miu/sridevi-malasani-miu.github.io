/**
 * Local Variables
 */
function localVariable() {
    let message = "Hello, I'm JavaScript!"; // local variable
    console.log( message );
}
localVariable(); // Hello, I'm JavaScript!
console.log( message ); // <-- Error! The variable is local to the function


 let userName = 'John';
/**
 * Outer Variable
 */
function outerVariable() {
let message = 'Hello, ' + userName;
console.log(message);
}
//outerVariable(); // Hello, John

let userName = "John";
function variableShadowing() {
let userName = "Bob"; // declare a local variable
let message = 'Hello, ' + userName; // Bob
console.log(message);
}
variableShadowing();
console.log( userName ); 


"use strict";
const msg = 'hello';
console.log(msg);
let mgs = 'goodbye';
console.log (msg);

function a(){
    console.log(x);
}
function b(){
    let x = 20;
    a();
    console.log(x);
}
let x = 10;
b();

function b(){
    function a(){
        console.log(x);
    }
    a();
    console.log(x);
}
let x = 10;
b();
console.log(x);

function b(){
    let x = 20;
    function a(){
        console.log(x);
    }
    a();
    console.log(x);
}
let x = 10;
b();
console.log(x);

//ternary Operator
let day =2;
const message = day > 5 ? "Happy weekend! " : "Happy weekday!"; 
console.log(message)

//ternary operator equivalent code
if(day>5)
console.log("Happy weekend");
else
console.log("Happy weekday!")

//Nullish Operator
let height;
console.log(height)
height = height ?? "ab";
//Nullish operator equivalent code
// if(height==null)
// height =100;
console.log(height);
