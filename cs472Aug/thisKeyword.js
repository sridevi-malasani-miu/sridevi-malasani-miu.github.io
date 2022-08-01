// "use strict";
let variableT ;
varableT = 10;
console.log(varableT)
// console.log(this);
// "use strict";
// function myFun(){
//     console.log(this)
// }
// myFun();

// let obj = {
//     key1: 1, f1: function () {
//         console.log(this.key1);
//         this.key1 = 2;
//         // console.log(this);
//         function inner(){
//             // console.log("Inner function ",this);
//         }
//         // inner = ()=>console.log(this)
//         inner();
//     },
//     arrowFn: ()=>console.log(this)
// }

// obj.arrowFn();
// obj.f1();
// let obj2 = { f2: obj.f1 };
// // console.log(obj2);
// obj2.f2();
// obj.f1();

// let myFn = obj.f1;
// myFn();

// let vehicle = {wheels:4, changeWheels:function(newCount,car){
//     this.wheels = newCount;
//     console.log(car);
//     car.engine='v7'
// }}

// let car = {
//     engine: 'v6', transmission: 'auto',
//     changeWheels:function (){
//         vehicle.changeWheels(6,this);
//     },
//     changeTransmission: function (newValue) {
//         console.log(this)
//         this.transmission = newValue;
//         // this.arrowFn(this);
//     },
//     arrowFn: (myObj)=>{
//         console.log(myObj);
//         myObj.transmission="ultra";
//         let innerArrow = ()=>console.log(this);
//         innerArrow();
//     }
// }
// console.log(car.changeWheels());
// console.log(vehicle.wheels,car.engine)
// let myCar = car;

// let myCar = {engine:car.engine, transmission:car.transmission};
// myCar.changeTransmission= car.changeTransmission;


// let myCar = car;
// myCar.colour = 'white';

// // car.arrowFn(car);
// // console.log(car.transmission);
// myCar.changeTransmission('manual');

// console.log(myCar.transmission, car.transmission,car.colour)

// var a = {
//     name: "",
//     log: function () {
//         var self = this;
//         // self.name = "Hello";
//         this.name ="Hello"
//         console.log(this.name); //Hello
//         // var setFrench = function (newname) {
//         //     // this.name =newname;
//         //     self.name = newname;
//         // };
//         setFrench = (newname)=>this.name = newname;
//         setFrench("Bonjour");
//         console.log(this.name); //Bonjour
//         return ()=>{
//             console.log(this,b.colour)
//         }
//     }
// };
// let b = {colour:'red'}
// let logMe = a.log();

// logMe(b);

//arrow methods - dont get this, methods - this
//arrow fun inside method - 'this'
//inner fun inside method = dont get this

// let shapes = {
//     type: 'square', color: 'green'
//     , x: 2, findArea: function (y, z) {
//         console.log(this.x, y)
//         return this.x * y * z
//     }
// }

// let rectangle = {
//     x: 4
// }
// rectangle.findArea = shapes.findArea;
// console.log(rectangle.findArea());

// let findArea = shapes.findArea.bind(rectangle,5);

// console.log(shapes.findArea.apply(rectangle, 5, 5));


// const me = {
//     first: 'Tina',
//     last: 'Xing',
//     getFullName: function () {
//         console.log(" here ",this)
//         // return this.first + ' ' + this.last;
//     }
// }

// const log = function (height, weight) { 
//     console.log(this);// ‘this’ refers to the invoker
//     // console.log(this.getFullName() + height + ' ' + weight);
// }
// // log();
// const logMe = me.getFullName();
// log('180','70');
// logMe('180','70')
// log.call(me,180,40)
//    logMe('180cm", "70kg"); // Tina Xing 180cm 70kg
//    log.call(me, '180cm', '70kg'); // Tina Xing 180cm 70kg
//    log.apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg 

// console.log(findArea(6));ss

// function add(x,y,v, ...z){
//     console.log(x,y,p);
//     callAdd(z,p);
// }

// function callAdd(array){
//     console.log(array)
// }

// add(1,2,3,4,5,[1,2],{a:1})

// let a = [[1],2,3];

// let b ='dog';
// let c = [5,6];

// let d= [[...a],b,[...c]];
// console.log(d);
// a.push(4);
// console.log(d,a);


// console.log([...a,b,...c])

// let a =[[1],2,3]
// let b = [...a];
// b[0].push(4);
// console.log(a,b);

// let obj = {a:1,b:{c:1}};
// let stringObj = JSON.stringify(obj);
// let objCopy = JSON.parse(stringObj);

// let obj2 = {...objCopy}
// obj.a = 5;
// objCopy.b.c= 3;
// console.log(" obj1 ",obj);
//     console.log(" OBj2 ",obj2);

// let obj = {a:1,b:2};
// let obj1 = {a:3,d:4};

// let obj3 = {...obj,...obj1}
// console.log(obj3);

// const details ={firstName:'Code', lastName:'Burst', age: 22};
// const { lastName, age } = details;
// console.log(lastName, age);// Code 22



