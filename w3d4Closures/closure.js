// // //1
// let x = 9;

// function hi(x){
//     console.log(x)
// }
// hi(x);

// // //2
// let x = 9;

// function hi(x){
//     console.log(x)
// }

// hi();
// // //3
// let x = 9;

// function hi(x){
//     console.log(x)
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }

// // hi();

// // //4
// let j = 8;
// function hi(x){
//     let k = 10;
//     console.log(x);
//     return function inner(x){
//         console.log(x,j);
//     }
// }
// //let innerCall = hi(6)(9);
// let hi3  = function (fn){
//     fn();
// }

// function hi2(){
//     console.log(k);
// }

// // // hi3(hi2);

// // // let name = "John";
// // // sayHi();
// // // function sayHi() {
// // //     console.log("Hi, " + name);
// // // }
// // // name = "Pete";
// // //sayHi(); // what will it show: "John" or "Pete"?

// // function makeWorker() {
// //     let name = "John";
// //     return function () {
// //         console.log(name);
// //     };
// // }
// // let name = "Pete";
// // //create a function
// // let work = makeWorker();
// // //call it
// // work();

// // //Adder - one variable, x , inner function y, return x+y;

// // let q = 10;

// // function r(){
// //     let s = 20;
// //     console.log(q,s);
// //     function t(u){
// //         let v = 50;
// //         console.log(q,s,u);
// //         if(true){
// //             let w = 80;
// //             console.log(w);
// //             if(true){
// //                 let x = 90;
// //                 console.log(x);
// //             }
// //            // console.log(x);
// //         }
// //        // console.log(w);
// //     }
// //    // console.log(u,v);
// //     t(30);
// // }
// // //console.log(u,v,s);
// // //t()
// // r();

// function makeCounter() {
//     let count = 0;

//     return function (reset) {
//         ++count;
//         let innerCounter = 0;
//         let j = 0;
//         if (reset)
//             count = 0;
//         else
//             console.log(++count, ++j);
//     }
// }

// // //
// // let counter = makeCounter();//-> EC
// // counter();// ->anonymous function will have new EC, 
// // //outer EC is same for all counter
// // counter();
// // counter();
// // counter(true);
// // counter();

// // let counter1 = makeCounter();//->EC
// // counter1();
// // counter1();
// // counter1();
// // counter();//4
// // counter1();//4

// // makeCounter()
// // makeCounter()
// // makeCounter()

// // let j  = 0;
// // console.log(++j);
// // console.log(j);



// //  let globalVar = 60;

// //  function callA(){
// //      globalVar++;
// // //  }

// // //  function callB(){
// // //     globalVar++;
// // // }
// // // console.log(globalVar);
// // // callA();
// // // console.log(globalVar);
// // // callB();
// // // console.log(globalVar);

// // function makeWorker() {
// //     let name = "John";
// //     // console.log(this);
// //     return function (name) {
// //         let x = 1;
// //         console.log(name1);
// //     };
// // }
// // let name1 = "Pete";
// // // create a function
// // //let work = makeWorker();
// // // call it
// // makeWorker()();// what will it show? 
// // let globalVar = 2;

// // for (var i = 0; i < 2; i++) {
// //     console.log(i);
// // }

// // // {
// // //     let  x = 10;
// // //     console.log(x);
// // // }
// // // console.log(x);
// // // (function () {
// // //     let message = "Hello";
// // //     console.log(message); // Hello
// // // })();

// // // var x = 1;
// // // function foo() {
// // //     x = 2;
// // //     let j = 9;

// // //     bar();
// // // }

// // // function bar() {
// // //     console.log(x);
// // // }

// // // foo(); // 1

// // // function sayHi(a,b,c) {
// // //     console.log("Hi");
// // //     // let's count how many times we run
// // //     sayHi.counter++; //property created here 
// // // }
// // // sayHi.counter = 0; // initial value
// // // sayHi.myParam = 9;

// // // sayHi.myFun = function(){
// // //     console.log(" I am property")
// // // }
// // // sayHi.arr = [1,2,3,4]
// // // sayHi.obj ={a:1}
// // // sayHi(); // Hi
// // // sayHi(); // Hi
// // // console.log(`Called ${sayHi.counter} times`,sayHi.myParam); // Called 2 times

// // // console.log(sayHi.length,sayHi.myFun(),sayHi.obj,sayHi.arr);
// // function createShooter(i) {
// //     return function () {
// //         console.log(i);
// //     };
// // }

// // //annonymous->outer while block -> makeArmy
// // function makeArmy() {
// //     let shooters = [];
// //     let i = 0;
// //     while (i < 10) {
// //         let shooter = createShooter(i);
// //         shooters.push(shooter); // and add it to the array
// //         i++;
// //     }
// //     return shooters;
// // }
// // //for loop - > { i = 0 } {i = 1} 
// // let army = makeArmy();

// // // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// // army[0](); // 10 from the shooter number 0
// // army[0]();
// // army[0]();
// // army[1](); // 10 from the shooter number 1
// // army[2](); // 10 ...and so on.


// // //createShooter()
// // // shooter1 shooter2 shooter3
// // // 0
// // // let first = createShooter(0);
// // // first();
// // // first();
// // // let second = createShooter(1);
// // // first();
// // // second();

// // //when you print outside the function -{}
// // //inside function - global object
// // //when you set it as a value for a property -{}
// // //when this is used in a method and call it with object- > object
// // console.log(this);
// // function outside() {
// //     console.log(this);

// //     //return this;
// // }
// // //console.log(outside())

// // let a = { b: this, c: function () { console.log(this) } }
// // // console.log(a);

// // //"use strict";
// function area(a, b) {
//     console.log(this, a, b);
//     return this.side * this.side;
// }
// const square1 = {
//     side: 5, area: area,
//     myFun: function () { console.log(this) }
// };
// const otherObj = { side: 10, x: 10 }
// //console.log(square1.area());
// //console.log(area());
// // let myArea = square1.area;
// // console.log(myArea());

// function outer() {
//     //console.log(this);
//     return {
//         add: function () {
//             console.log("INside add", this);
//         }
//     }
// }
// //outer();
// //function wrapper
// //setTimeout(function(){square1.area()},100);
// //bind
// //setTimeout(square1.area.bind(square1),1000);
// // apply c for comma, a for array
// //setTimeout(function () { console.log(outer().add.apply(otherObj, [1, 2])) }, 100);
// //call
// //setTimeout(function(){square1.area.call(otherObj,1,2)},100);
// //this -{} for properties, variables
// //this - functions -global
// //this - refers to object when invoked with object
// const abc = {
//     salute: "",
//     greet: function () {
//         const self = this;
//         this.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function (newSalute) { //inner function
//             console.log(this);
//             self.salute = newSalute;
//         };
//         // setFrench = (newSalute)=>{
//         //         console.log(this);
//         //         this.salute = newSalute;
//         // }
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour??
//     }
// };
// //abc.greet();

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         console.log(this.students);
//         function forEachHelper(student){
//             console.log(this.title + ': ' + student);
//         }
//         this.students.forEach(forEachHelper);
//        // this.students.forEach(
//            // function(student){console.log(this.title + ': ' + student); })//error – ‘this’ is undefined (or window)
//             //student => console.log(this.title + ': ' + student) //works as expected – ‘this’ from lexical environment, showList
//        // );
//     }
// };

// //group.showList();

// let arrowfn = {
//     fun:function(){
//         console.log(" Inside fun");
//         //this.first.fun2();
//        // this.first.call();
//        let obj = this.first.call();
//        console.log(" object ",obj)
//        obj.second();
//     },
//     first:{
//         fun2:() => { console.log(this)},
//         call:function(){
//            //console.log(this); 
//            let secondFn = function(){console.log(this)};
//            secondFn();
//            return {second:secondFn,a:1,b:2};
//         }
        
//     }
// }
// arrowfn.fun();
// //fun->call

// function nestedFn(){
//     function first(){
//         let name = "First";
//         function second(){
//             let name = "second";
//             function third(){
//                 console.log(this);
//                 let name = "third";
//             }
//             third();
//         }
//         second()
//     }
//     first()
// }
// //nestedFn();
