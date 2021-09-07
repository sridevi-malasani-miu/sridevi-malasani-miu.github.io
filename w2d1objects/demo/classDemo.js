"use strict";
// let  user = { name: "myName", age:30};

// delete user.age;
// console.log(user);
// user.name= "myName2"

// console.log(user);

// user["like birds"] = true;
// console.log(user)
// delete user["like birds"];
// console.log(user["name"])
// console.log(user);

// let x = "computed";
// user[x]=9;
// console.log(user);

// user[x+"expr"] =10;
// console.log(user)
// console.log(user.computedexpr);
// createUser("myVariable")
// function createUser(x){
//     user[x]="12";
// }
// const numbers = {
  
//     one: 1,
//     two: 22,
//     three: 333,
//     four: 444,
//     value: 1
// };
// const properties = ["one", "two", "three", "four"]  ;

// function printValues(){
//     for (let value of properties){
//         console.log(value,numbers[value]);
//     }
// }
// function createUser(toName,toAge){
//     return {toName,toAge}
//     //return {toName:toName,toAge:toAge}
// }
// console.log(createUser("3333","444"));

// printValues();

// let xxx = 9;
// let y = {xxx};
// console.log(y)
// function sum() {
//     console.log("print x");
// }

// exports = {sum:sum};
// console.log(exports.sum===sum);

// let a = [1,2,3];
// let b = a;

// let object1 = {user:3, age:4};
// let object2  = object1;
// object1.age =5;

// //console.log(a===[1,2,3]);
// console.log(object1===object2)
// console.log(object2);

// let myX = 9;
// let myObj = {user:1,age:2,something:undefined}
// function callMe(x){
//    x.user = 9;
//    x = {newUser:1};
//    console.log(x);
//    let y =x;
//    y.newUser = 7;
//     console.log(x);
// }
// console.log(myObj)
// callMe(myObj);
// console.log(myObj.something===undefined);
// console.log("user" in myObj);

// for(let key in myObj){
//     console.log(key, myObj[key]);
// }

// let a = {name:"1",age:"3","play":3}
// for(let b of a){
//     console.log(" I am here ",b );
// }

// function assignment(x){
//     x.area = 10;
//     //x = {user:30};
//     console.log(x)
// }

// x = {age:40};
// assignment(x);
// console.log(x);

function squareRoot(element,fun){
    let x = fun(element);
    console.log(x)
    return Math.sqrt(x);
};

squareRoot(2,function(element){console.log(element);return element*2});   

// function a (x){
//     let b = function (){ console.log(x);}
//     console.log(b());
//     return x;
//     }
    
//     a(5);

    // function a(x){ 
    //     let b = function (){console.log(x)};    
    // } 
    
    // console.log(b()); 
        //What is the output

// let a = {user:"sri"};
// let b = a;
// let c = b;
// b.age = 1;
// b.isAdmin = true;
// a.isAdmin = false;

// console.log(b);

// a = 0;
// console.log(c);


// // // let x = 2;
// // // let j = x;
// // // x++;
// // // console.log(x,j)

// let pt1 = {x1:2,y1:2};
// let pt2 = {x1:2,y1:2};
//  let pt3 =null;

// console.log(pt3);

// function marry(man, woman) {
//     console.log(man,woman);
//     woman.husband = man;
//     man.wife = woman;
//     console.log(man,woman)
//     return {
//         father: man,
//         mother: woman
//     }
// }
//     let family = marry({ name: "John"}, 
//     { name: "Ann"});

//     console.log(" family ",family)
//     delete family.father;
//     console.log(" family after deletion ",family)
//     delete family.mother.husband
//     console.log(" family after deletion husband ",family)

//   let nestedObj = { user:"string",isAdmin:{name:{value:5}}}

//   function getValues(){
//   // console.log( nestedObj.isAdmin.name.value );

//   }

//   let userObj = {name:"name", sayHi:function(){console.log("method"); return 2}}
//  // userObj.sayHi()
//  console.log( userObj.sayHi());

// //console.log(sayHi);


// function thisDemo(){
//     console.log(" what is the value of ",this);
// }
// thisDemo();

// function makeUser() {
//     return {
//       name: "John",
//       say:function(){ let myProp = this; console.log(this.name)},
//       ref: this
//     };
//   }
//   let user = makeUser();
//  // console.log( user.ref.name); 
//   console.log(user.say());

//   let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // shows the current step
//       console.log( this.step );
//     }
//   };
//   ladder.up();
//   console.log(ladder.up());
//   console.log(ladder.step);
//   ladder.up().down().up();
//   console.log(ladder.step);

// let x = {}
// function A() { return x; }
// function B() { return x; }

// let a = new A();
// let b = new B();

// console.log( a == b ); // true

//Create a function that loops array and check each number is multiple of four

// function loopArray(array){
//     let sum=0;
//     //check()
//     for(let valuesr of array){
//        if(check(valuesr)){
//         sum+=valuesr;
//        }
//     }
// }

// function check(num){
//     let count =0;
//    return  num%4==0;
// }


//c = [5,7,9,8,8,9];//?
//a[4]

function sum(arr1,arr2){
    let newArray=[];
   // let diff = arr1.length-arr2.length;

    let len = arr1.length>arr2.length ? arr1.length : arr2.length;
    for(let i =0;i<len;i++){
        if(arr1[i]==undefined)
            newArray.push(arr2[i])
        else if(arr2[i]==undefined)
            newArray.push((arr1[i]));
        else
            newArray.push(individualSum(arr1[i],arr2[i]));
    }
    return newArray;
}

function individualSum(a,b){
   return a+b;

}
let a=[1,2,3,4], b =[4,5,6,4,8,9];
console.log(sum(b,a));
