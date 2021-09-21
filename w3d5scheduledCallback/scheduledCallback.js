//Perform Add function after timeout
//Call timeout function 

function a() {
    console.log("print Me");
    let count = 0;
    return function (funName, timerId) {
        console.log("I am inner", ++count, funName)
        clearInterval(timerId);
    }
}

function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
}
// let timerId = setTimeout(sayHi, 2000, "Hello", "John"); // Hello, Joh

function b (funName, timeInterval){
    console.log("I am inner", ++count, funName)
    clearInterval(timeInterval);
}
// let timeInterval = setInterval(b, 1000, "Interval");
// let timerId = setTimeout(b, 5000, "Timeout", timeInterval);
// //clearTimeout(timerId);
// setInterval(b, 2000, "Interval 2");

//b (funName, timeInterval);


let count = 1;
function interval() {
    console.log(" I am here ", count);
    count++;
    if (count > 10)
        clearInterval(this);
}
setInterval(interval,1000);
