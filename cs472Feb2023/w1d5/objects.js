//Create Empty Object
let obj = {};

//Create object with properties
let obj2 = { a: 1, b: 2 };

//Read the value of property
console.log(obj2.a);

//Change the value of properties
obj2.b = 4;
console.log(obj2);

//Delete property
delete obj2.a;
console.log(obj2);

//create mixed datatypes object
let obj3 = {
    a: 1, b: "apple", c: [1, 2], d: [[1, 2, 3], 4], e: { innerA: 3 },
    f: function (param) {
        console.log("print me ", param)
    }
}
//Call method, i.e. function inside object
obj3.f("Calling");

//Read property of inner object
let objA = obj3.e;
console.log(objA.innerA);
console.log(obj3.e.innerA);

//Primitives copied by value
let message ='hello';
let phrase = message;
console.log(message,phrase);

phrase = " text "+message;
console.log(message,phrase);


//Objects copied by reference
let obj = {a:1,b:2};
let obj2 = obj;
console.log(obj,obj2)
delete obj2.a

console.log(obj,obj2)

//reassigning object changes its memory location
obj2 = {b:2};
obj2.c = 4
console.log(obj,obj2)

//Looping object
function loopingObject(obj){
    for(let key in obj){
        console.log(" key value",key, obj[key])
    }
}
loopingObject({a:1,b:2})
