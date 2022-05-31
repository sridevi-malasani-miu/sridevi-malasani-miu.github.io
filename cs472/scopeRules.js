
//Read value from global scope, reassign the value changes the global scope variable.
let x = 1;
function a(){
    console.log(x);//1
    x=2;
    console.log(x);//2
}
a();
console.log(x);//2 
// //local variable x is changed, doesnt affect the global variable
let x = 1;
function a(){
    let x=2;
    console.log(x);//2
}
a();
console.log(x);//1

//parameter x is changed, doesnt affect the global variable
let x = 1;
function a(x){
    x = 4;
    console.log(x);//4
}
a();
console.log(x);//1

//Declare new variable after changing the global variable, local variable is created, global
//variable remains unchanged. 
let x = 1;
function a(){
    console.log(x);//
    x=2;
    console.log(x);//
    var x = 4;
}
a();
console.log(x);//1 

 //Object pass by reference
let x = {a:1};
function a(x){
    x.a = 4;
    console.log(x.a);//4
}
a(x);
console.log(x.a);//4

//Object reassigned inside function, doesnt change the outside object
let x = {a:1};
function a(x){
    x={a:4}
    console.log(x.a);//{a:4}
}
a(x);
console.log(x.a);//{a:1}


var x = 10;

function main() {//var x;
    console.log("x1 is:" + x);//undefined? x is declared but not yet assigned, 
    //there is local varaible with same name.
    x = 20;
    console.log("x2 is:" + x);//20? assign local variable
    if (x > 0) {
        var x = 30;//
        console.log("x3 is:" + x);//30?local variable is reassigned.
    }
    console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
    var x = 40;
    var f = function (x) {
        console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
    };
    f(50);
    console.log("x6 is:" + x);//40 (213)local variable is assigned 40, 
}
main();
console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.

