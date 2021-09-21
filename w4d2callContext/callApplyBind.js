// var o = { x: 15 };

// function f1(message1)
// {
//     console.log(message1 + this.x);
// }

// function f2(message1, message2)
// {
//     console.log(message1 + (this.x * this.x) + message2);
// }

// function g(object, func, args)
// {
//     func.apply(object, args);
// }

// g(o, f1, ["the value of x = "]);
// g(o, f2, ["the value of x squared = ", ". Wow!"]);

// var x = 10;
// var o = { x: 15 };
// function f(message)
// {
//     console.log(message);
//     console.log(this.x);
// }

// f("invoking f");
// f.call(o, "invoking f via call");

function context() {
    console.log(this);
}
let myObj = { a: 1 };
myObj.context = context;
//context();

let myObj1 = { a: "hello" };
myObj1.context = context;
//myObj1.context();

//setTimeout(context,1000);
//console.log(myObj.context);
//myObj.context();

const abc = {
    a: 1, b: 2, add: function () {
        console.log(this);
        console.log("1+2 = 3?", this.a + this.b);
    }
}

const def = { a: 4, b: 6 };
function ghi() {
    console.log(this)
    console.log(this.a - this.b);
}
//abc.add(); //works 
//let x = abc.add;
//setTimeout(abc.add, 2000); //problem!;
// setTimeout(function(){//console.log(this);
//      abc.add() }, 2000); 

//setTimeout(abc.add.bind(abc), 2000);
//setTimeout(function (){abc.add.call(def)}, 2000);
//setTimeout(function () { abc.add.apply(def) }, 2000);
//setTimeout(() => abc.add(), 1000);

function a() {
    console.log(this);
}
const b = {
    dog: 'fido',
    log: function () {
        console.log(this);
    }
}
//console.log("OUtside ", this);
//a();
// b.log();
//let mylog = b.log;
//mylog();

const me = {
    first: 'Tina',
    last: 'Xing',
    getFullName: function () {
        return this.first + ' ' + this.last;
    }
}
const log = function (height, weight) { // ‘this’ refers to the invoker
    console.log(this.getFullName() + height + ' ' + weight);
}
const logMe = log.bind(me);
//logMe('180cm', '70kg'); // Tina Xing 180cm 70kg 
//log.call(me, '180cm', '70kg'); // Tina Xing 180cm 70kg 
//log.apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg 
 //log.bind(me, '180cm', '70kg')(); // Tina Xing 180cm 70kg 




