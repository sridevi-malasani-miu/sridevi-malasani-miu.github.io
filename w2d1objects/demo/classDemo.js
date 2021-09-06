let  user = { name: "myName", age:30};

delete user.age;
console.log(user);
user.name= "myName2"

console.log(user);

user["like birds"] = true;
console.log(user)
delete user["like birds"];
console.log(user["name"])
console.log(user);

let x = "computed";
user[x]=9;
console.log(user);

user[x+"expr"] =10;
console.log(user)
console.log(user.computedexpr);
createUser("myVariable")
function createUser(x){
    user[x]="12";
}
const numbers = {
  
    one: 1,
    two: 22,
    three: 333,
    four: 444,
    value: 1
};
const properties = ["one", "two", "three", "four"]  ;

function printValues(){
    for (let value of properties){
        console.log(value,numbers[value]);
    }
}
function createUser(toName,toAge){
    return {toName,toAge}
    //return {toName:toName,toAge:toAge}
}
console.log(createUser("3333","444"));

printValues();

let xxx = 9;
let y = {xxx};
console.log(y)
function sum() {
    console.log("print x");
}

exports = {sum:sum};
console.log(exports.sum===sum);

let a = [1,2,3];
let b = a;

let object1 = {user:3, age:4};
let object2  = object1;
object1.age =5;

//console.log(a===[1,2,3]);
console.log(object1===object2)
console.log(object2);

let myX = 9;
let myObj = {user:1,age:2,something:undefined}
function callMe(x){
   x.user = 9;
   x = {newUser:1};
   console.log(x);
   let y =x;
   y.newUser = 7;
    console.log(x);
}
console.log(myObj)
callMe(myObj);
console.log(myObj.something===undefined);
console.log("user" in myObj);

for(let key in myObj){
    console.log(key, myObj[key]);
}

let a = {name:"1",age:"3","play":3}
for(let b of a){
    console.log(" I am here ",b );
}

function assignment(x){
    x.area = 10;
    //x = {user:30};
    console.log(x)
}

x = {age:40};
assignment(x);
console.log(x);