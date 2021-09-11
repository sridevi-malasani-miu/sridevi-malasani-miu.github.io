const player1 = {name: "Bob", points: [1, 2, 1,8]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};

const players = [player1, player2, player3];

//[{Bob:1.33, Andre:1, Max:1} ]
//let a = [1,2,3,4]
//map = [[12,3],[4,5],[4,5]];
function averagePoints(players){
    //with reduce
    return players.reduce(function(acc,current){
        let sum =  current.points.reduce(function(sum,item){
            return sum+item;
        },0);
        let average = sum/current.points.length
        acc[current.name]=average;
        return acc;
    },{});

}

function ask(question, yes, no) {
    if(question)
        return yes();
    else 
        return no();
}

let showOk=() => console.log ( "You agreed." );
let showCancel = ()=>console.log ( "You canceled the execution." );

ask("Do you agree?", showOk, showCancel);

function executor(fn,a,b){
    return fn(a,b);
}
let add= (a,b)=> a+b;
let mul = (a,b)=> a*b;

let caluculatorL = {
    // getValues:function(operand1,operand2){
    //     console.log("here ");
    //     this.operand1 = operand1;
    //     this.operand2 = operand2;
    // },
    operand1:0,
    operand2:0,
    sum:function(){
        return this.operand1+this.operand2;
    },
    mul:function(){
        return this.operand1*this.operand2;
    }
}
caluculatorL.operand2 = 4, caluculatorL.operand1=5;
console.log(caluculatorL.sum());
caluculatorL.operand2 = 5, caluculatorL.operand1=8;


function Calculator(operand1,operand2){
            this.operand1 = operand1;
        this.operand2 = operand2;
    // this.getValues=function(operand1,operand2){
    //     this.operand1 = operand1;
    //     this.operand2 = operand2;
    // },
    this.sum=function(){
        return this.operand1+this.operand2;
    },
    this.mul=function(){
        return this.operand1*this.operand2;
    }
}

let calc = new Calculator(3,4);
console.log(calc.sum())
let calc2 = new Calculator(6,7);
console.log(calc2.sum())
console.log(calc.sum())
//caluculator.getValues(4,5);
//console.log(caluculator.sum())


function reorder(string){
    let array = string.split(" ");
    array.sort((a,b)=> b.length-a.length);
    console.log(array.join(" "))
}
reorder("JavaScript is the world's most popular programming language")

const numbers = [[1, 5],[ 18, 2], [77, 108]];
// console.log(numbers.filter(item => item%2==0));
// console.log(numbers.find(item => {
//     console.log(item);//[1, 5]
//     item.find()
//     return item%2==0
// } ));

let myArray = [];
numbers.forEach(function(item,index,array){
    myArray.push(item.filter(item => item%2==0));
});
console.log(myArray);
//console.log(numbers.findIndex(item => item%2==0));

//a. Get average age,  round the result to keep only two decimals.

let array= [{name:"ram",age:29}, {name:"syam",age:40}, {name:"ganga",age:49}];

//create an array of name vs index,
//["ram:0","syam:1","ganga:2"]

console.log(array.map((item,index,array)=> item.name+" :"+index));


//console.log(“expect 75.33”,getAverageAge(array));

//b. Find the oldest man

//console.log(“expect {name:"syam",age:40}”,findOldestMan(array));
// let sum;
// for(let value of array){
//     sum*=value.age;
// }

let sum = array.reduce((sum,current)=> {
    console.log(current);
    return sum+current.age
},0);
console.log((sum/array.length).toFixed(2));

let max = array.reduce((max,current)=> {
    console.log(max);
    if(!max.age) return current;
    if(max.age>current.age)
        return max;
    return current;
},{});
console.log(max);

function findOldestMan(array){

    let maxAge = -(2**53);
    
    let maxAgeName = ""; let obj = {}
    
    for (let i = 0; i < array.length; i++) {
    
    if(array[i].age>maxAge){
    
    maxAge = array[i].age;
    
    maxAgeName = array[i].name;
    
    }
    
     }

    
    return {name:maxAgeName,age:maxAge};
    
    }
    console.log(findOldestMan(array));


//let max = arra

