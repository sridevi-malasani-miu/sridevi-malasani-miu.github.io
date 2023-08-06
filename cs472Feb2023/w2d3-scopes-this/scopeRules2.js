Let,const - nearest enclosing block scope
var - nearest enclosing function scope

Multiple initialization with let results in Error
// let i = 0;
// let i = 10;
Mulitple initialization with var doesnt result in Error
// var i = 10;
// var i = 20;
Always local variable/parameter wins over the variable(even the same name) in other scope


Variables declared with let or const are hoisted WITHOUT a default initialization. 
So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization. 

function letFn1(){
    console.log(a);
    let a =4;
}
//As 'let' hoisted but not assigned
function letFn1Hoisting(){
    let a;//not assigned undefined.
    console.log(a);
     a =4;
}

function letFn2(b){
    console.log(a);
    if(b>5){
        console.log(" Something")
        console.log(" Other")
        let a =4;
    }
    
}
//Let is block scope, so the declaration is moved up in the block not in the function.
function letFn2Hoisting(){
    var a;
    console.log(a);
    if(b>5){
        let a;
        console.log(" Something")
        console.log(" Other");
        a=4;
    }
}


But variables declared with var are hoisted WITH a default initialization of undefined.
function fn1(){
    console.log(a);
    var a =4;
}
//As 'var' hoisted, above function is equivalent to 
function fn1Hoisting(){
    var a;
    console.log(a);
     a =4;
}

function fn2(b){
    console.log(a);
    if(b>5){
        var a =4;
    }
    
}
//Even if var is inside block,it is moved up, as it is function scope
function fn2Hoisting(){
    var a;
    console.log(a);
    if(b>5){
         a =4;
    }
}
