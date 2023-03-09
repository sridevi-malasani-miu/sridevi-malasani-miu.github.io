//Outside a function
console.log(this);

//assign this to property
var a ={b:this}
console.log(a.b);

//.Inside a method, and invoked with the object this -> object before dot. 
let obj1 = {a:1, b:function(){console.log(this)}}; 
obj1.b(); 

//Inside a method, and not invoked with the object this -> same as 1. 
let obj = {a:1, b:function(){console.log(this)}}; 
let newFun = obj.b; 
newFun(); 

//Arrow functions/methods -> this 
let arrow = ()=>console.log("Inside arrow ",this) 
arrow(); 

let objArrow = {a:1, b:()=>console.log("Inside Object arrow ",this)} 
objArrow.b(); 
//Inner function inside a method wont get access to object
//arrow function -> same as outer method 
let innerFun = { 
    b: 1, c: 2, d: function () { 
        let arrow = () => console.log("Inside inner arrow", this) 
        let innerFn = function () { 
            console.log("Inside inner Function", this) 
        } 
        arrow(); 
        innerFn(); 
    } 
} 

innerFun.d(); 
