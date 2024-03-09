// myFn();
// let myFn = function(){
//     console.log("here")
// }
//2
let steps = ['tatkaar','hastak'];
let sequences = [1,2];
let obj1 = {a:1} 
let newArray = [...sequences,obj1,...steps]
console.log('Array',newArray);
//3
function print1(){
    return 1;
}
console.log(print1(5,6,7,10));//28
console.log(print1(5,6));//11
//4
let moves ={nameOf:'back hook spin',level:'beginner'};
function print(){
    console.log(this);
}
console.log(print.bind(null));

//5
let myObj1 = {a:1,b:2,multiply:function(){
    return this.a*this.b;
}}
let fn = myObj1.multiply;
console.log(fn())

//6
let myObj2 = {x:1}
function update(x){
    x=4;
}
update(myObj2);
console.log(myObj2);

//7
function set(){
    let flag = true;
    function unset(flag){
        flag = flag;
    }
    unset(false);
    return flag;
}
console.log(set());

//8
let a = 5;
function add(){
    a++;
}
add();
console.log(a)


//9
let obj = {a:1,b:2, add:()=>{
    return this.a+this.b;
}}
console.log(obj.add());

//10
let myArray = [{fruit:'apple'},{flower:'rose'}] 
let [{fruit:fruit}] = myArray;
console.log("expect apple",fruit);

//11
let magic= {trick:'levitation',print:function(){
    if(Array.isArray(this))
        console.log(this[0])
    else
        console.log(magic.trick)
}}

let trick = ['penetration'];
magic.print.call(magic);//levitation
magic.print.call(trick);//pentration


















