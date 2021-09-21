// function User(name) {
//     this.name = name;
//     sayH23 = function(){
//         console.log(" Hi ")
//     }
//     sayH23();
// }
// User.prototype.sayHi = function () {
//     console.log(this.name);
// };
// User.sayH2 = function () {
//     console.log(this.name);
// };
// let user = new User("hi");
// user.sayH3 = function () {
//     console.log(this.name);
// };
// let user2 = new User("hi")
// //console.log(new User("hi").sayH2());
// console.log(user.sayH3());
// console.log(user2);


// let animal = {
//     eats: true,
//     walk: function () {
//         console.log("Animal walk");
//     }
// };
// let rabbit = {
// //     jumps: true,
// //     __proto__: animal
// // }
// // rabbit.walk = function() {
// //     console.log(this);
// //     console.log("Rabbit! Bounce-bounce!");
// // }
// // let longEar = {
// //     earLength: 10,
// //     __proto__: rabbit
// //     };
// // console.log(animal.earLength);
// // rabbit.walk();
// // animal.walk();
// // longEar.walk();

// let animal = {
// //     isSleeping: false,
// //     walk: function () {
// //         if (!this.isSleeping) {
// //             console.log(`I walk`);
// //         }
// //     },
// //     sleep: function () {
// //         //console.log(this);
// //         this.isSleeping = true;
// //     }
// // };
// // let rabbit = {
// //     isSleeping: true,
// //     name: "White Rabbit",
// //     __proto__: animal
// // };
// // rabbit.sleep();
// // console.log(rabbit.isSleeping);
// // animal.isSleeping = false;
// // console.log(rabbit.isSleeping);

// // for (let key in rabbit) {
// //     console.log(key);
// // }
// // console.log(Object.keys(rabbit))

// let animal = {
//     eats: true
// };
// // function Rabbit(name) {
// //     this.name = name;
// // }
// // Rabbit.prototype = animal;

// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// }
// //let rabbit = new Rabbit("White Rabbit"); //rabbit.__proto__ == animal
// console.log(rabbit.eats); // true
// console.log(rabbit.__proto__)

// let obj = {};
// console.log(obj.__proto__ === Object.prototype); // true
// // obj.toString === obj.__proto__.toString === Object.prototype.toStrin

// String.prototype.show = function () { console.log(this); };
// "BOOM!".show(); // BOOM!

// class User {
//     constructor(name) {
//         this.name = name;
//         this.method2 = function () {
//             console.log(" here")
//         }
//     }
//     sayHi() {
//         console.log(this.name);
//     }
// }
// console.log(User)

// // function User(name){
// //     this.name = name;
// //     this.sayHi = function (){
// //         console.log(this.name)
// //     }
// // }
// // Usage:
// console.log(User)
// let user = new User("John");
// user.method2()

// for (let key in user) {
//     console.log(key);
// }
//user.sayHi();

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}
class Rabbit extends Animal  {
    constructor(name) {
        super(name)
        this.name = name;
       
       // static myVar = 10;
    }
    #secret = 10;
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
       // super.stop(); // call parent stop
        this.hide(); // and then hide
        }
    static staticMethod(){
        console.log(" StaticMethod")
    }
    static staticVar = 10
}

Rabbit.prototype.start= function(){
    console.log(" Add method to class")
}

Rabbit.prototype.newProp = 90;

let rabbit = new Rabbit("White Rabbit",10);
rabbit.stop();
console.log(rabbit.secret);
rabbit.secret = 20;
console.log(rabbit.secret)
Rabbit.staticMethod();
console.log(Rabbit.staticVar);
rabbit.start = function(){
    console.log(" i started")
}
rabbit.start();


let rabbit2 = new Rabbit("Black Rabbit",10);
console.log(rabbit2);
console.log(rabbit2.start())
console.log(rabbit2.newProp)
