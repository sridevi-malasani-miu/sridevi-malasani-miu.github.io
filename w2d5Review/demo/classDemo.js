// // //"use strict";
// // // // // // function User(id,name,isAdmin){
// // // // // //     this.id = id;
// // // // // //     this.name=name;
// // // // // //     this.isAdmin = isAdmin;
// // // // // // }

// // // // // // let user = new User(1,"Upan",true);
// // // // // // user.lastName = "lastName";
// // // // // // console.log(user);
// // // // // // let user1 =  new User(2,"Upan1",true);
// // // // // // let user2 =  new User(3,"Upan2",true);

// // // // // // let user4 = {name:"hi",age:1};
// // // // // // let user5 = {name:"hi",age:7};
// // // // // // let user6 = {name:"hi",age:8};

// // // // // // let someOth= {user:'hi',myProp:1}

// // // // // // let array = [user4,user5,user6]

// // // // // // let sum =0;
// // // // // // for(let key in user4){
    
// // // // // //     console.log(key,user5[key]);
// // // // // // }

// // // // // let d = "42.5rr455";
// // // // // console.log(Number(d))
// // // // // // console.log(typeof d)
// // // // // // console.log(parseInt(10,2));
// // // // // // console.log(typeof parseInt(d));
// // // // // // console.log(typeof null)

// // // // // // function circumference(r) {
// // // // // //     if (isNaN(parseFloat(r))) {
// // // // // //         return 0;
// // // // // //     }
// // // // // //     return parseFloat(r) * 2.0 * Math.PI;
// // // // // // }
// // // // // //     console.log(circumference("tt62.3.44"))

// // // // // let n = 12.547;
// // // // // console.log(n.toFixed(6));

// // // // // let nToStr = 12;
// // // // // console.log(typeof (""+nToStr));
// // // // // console.log(typeof (nToStr.toString()))

// // // // // let Math = {};

// // // // // Math.ceil = function (num){
// // // // //     if(isNaN(num))
// // // // //         return 0;
// // // // // }
// // // // // console.log(Math.ceil(null))

// // // // // const foo = 45;
// // // // // const x = 5;
// // // // // const y = x+1;

// // // // // const bar = "" + foo;

// // // // // function typeofPseudo(num){
// // // // //     if(num > 0)
// // // // //      return "number";
// // // // //     else if (num =="false me")
// // // // //         return "string";
// // // // //     else if(num==true)
// // // // //         return "Boolean"
// // // // // }

// // // // // console.log(typeof typeofPseudo=="function"); 
// // // // // console.log(`1 + 2 is ${ typeofPseudo(1)}.`); // 1 + 2 = 3.
// // // // // console.log("1 + 2 is "+ typeofPseudo(1)+ ".")

// // // // // let str1 = "String1"; let str2 = "String2";
// // // // // console.log(`1 + 2 is
// // // // //  ${ str1+str2}.
// // // // //  Hi`);

// // // // //  console.log(" Multiple lines "+
// // // // //   "hi");
// // // // //    let str = 'Widget with Id';
// // // // // console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// // // // // console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
// // // // // console.log( str.indexOf("i") ); // 1, "id" is found at the position 1 (..idget with id)

// // // // // console.log(str.lastIndexOf("i"));
// // // // // console.log(str.includes("widget"));

// // // // // let str = "stringify";
// // // // // //console.log(str.slice(0,2));
// // // // // console.log(str);
// // // // // let str1 = "   trim  454 ";
// // // // // console.log(str1.trim());
// // // // // console.log(str1);
// // // // // console.log((str).repeat(8));
// // // // // console.log(str);

// // // // // let arr = ["I", "study", "JavaScript","I"];
// // // // // console.log(arr.splice(0, 0)); // from index 1 remove 1 element
// // // // // console.log( arr ); // ["I", "JavaScript"]

// // // // //console.log(arr.splice(0,0,"Insert Me"));
// // // // // console.log(arr.splice(1,0,"Insert Me"));
// // // // // console.log( arr );

// // // // //console.log(arr.splice(4,2,"Insert Me"));
// // // // //console.log( arr.includes("Java") );

// // // // // console.log( arr.slice(0,2) );
// // // // // console.log(arr);

// // // // // let arr = [[1, 2],[10,20]];//[1,2]
// // // // // // create an array from: arr and [3,4]
// // // // // //console.log( arr.concat([3, 4])); // 1,2,3,4
// // // // // // create an array from: arr and [3,4] and [5,6]
// // // // //  console.log( arr.concat([[3, 4]], [[5, 6]])); // 1,2,3,4,5,6
// // // // // // // create an array from: arr and [3,4], then add values 5 and 6
// // // // // console.log( arr.concat([3, 4], 5, 6,"true",true,{name:'hi'})); // 1,2,3,4,5,
// // // // // // [[1,2],[10,20],3,4,5,6]

// // // // // ["Bilbo", "Gandalf", "Nazgul"].
// // // // // forEach((item, index, array) => {
// // // // //     //console.log(array)
// // // // //     console.log (`${item} is at index ${index} in ${array}`);
// // // // // });

// // // // // let ar = [1,5,16,3, 108];
// // // // // ar.forEach(function(item,index){
// // // // //     if(item%2==0)
// // // // //         console.log(item,index);
// // // // // })

// // // // // //let a = {name:'hi'};
// // // // // for(let value in ar){
// // // // //     console.log(value)
// // // // // }
// // // // let students = [{id:1,name:"x"},
// // // // {id:2,name:"y"},{id:3,name:"z"}];

// // // // // function findItem(item){
// // // // //     return item%2==0;
// // // // // }

// // // // let findItem = function(item){
// // // //         return item%2==0;
// // // // }
// // // // // let results = students.filter(function(item, index, array) {
// // // // //     return item.id%2==0;
// // // // // });

// // // // // console.log(students.filter( item => item.id%2==0));
// // // // // console.log(students);

// // // // console.log(students.findIndex(item => item.id==1));

// // // // let numbers = [1, 5, 18, 2, 77, 108];

// // // // console.log(numbers.filter(findItem));
// // // // console.log(numbers.find(findItem));
// // // // console.log(numbers.findIndex(findItem));

// // // // console.log(numbers.join(" JOIN "));

// // // // let fruits = ["banana","apple","pear"];
// // // // function mapR(item,index){
// // // //     return { index:index,lengthOf:item.length}
// // // // }

// // // // console.log(fruits.map((item,index)=> index+" : "+ item.length));
// // // // console.log(fruits.map(
// // // //     function(item,index,array){
// // // //         return {index:index,lengthOf:item.length};
// // // //     }
// // // // ));
// // // // console.log(fruits)

// // // // let sortA = [1,4,-1];
// // // // let sortStrings =["banana","apple","pear"];

// // // // let objectArray = []
// // // // console.log(sortStrings.sort());

// // // // // }
// // // // let studentsA = [{id:3,name:"v"},
// // // // {id:1,name:"a"},{id:2,name:"z"}];


// // // // function compareNumeric(a, b) {
// // // //     if(a.name>b.name)
// // // //         return -1;
// // // //     else if(a.name==b.name)
// // // //         return 0;
// // // //     else 
// // // //         return 1;
// // // // }
// // // // console.log(studentsA.sort( (a,b)=>{
// // // //     if(a.name>b.name)
// // // //         return -1;
// // // //     else if(a.name==b.name)
// // // //         return 0;
// // // //     else 
// // // //         return 1;
// // // // }));

// // // //sort 
// // // console.log(studentsA.sort( (a,b)=> a.id-b.id));

// // // // let arr = [10,1, 2, 3, 4, 5];

// // // // let objectArray = [{id:1, num:20}, {id:2, num:10}]
// // // // let result = objectArray.reduce(

// // // //     function (sum, current,index) { 
// // // //         //return sum+current; 
// // // //         return sum + current.num}, 0);
 

// // // // let str = "john-has-a-pen";
// // // // // let firstElement = str.slice(0,1).toUpperCase();
// // // // // let remainingStr = str.slice(1);
// // // // // console.log(str.charAt(0).toUpperCase());
// // // // // console.log(firstElement+remainingStr);
// // // // console.log([1,2,3,4].join(" \t "));

// // // let arr = [10,1, 27, 3, 42, 5];

// // // arr.reduce(function(accumulator,current,index){
// // //     console.log(`index ${index} accumulator ${accumulator} current ${current}`);
// // //     return accumulator>current? accumulator:current;
// // // },0);

   

// // // letminVal = numArray.reduce((acco, current) => {​​​​​​​​
// // // Math.min(acco, current);
// // // }​​​​​​​​, Number.MAX_VALUE);



// // //this
// // //one function calling another function, passing different 
// // //function
// // //Bank Object - debit, credit, getBalance methods
// // //properties - balanceAmount, accountNumber,name;
// // function Student(id,name,scores,strings){
// //     this.id =id;
// //     this.name=name;
// //     this.scores = scores;
// //     this.strings =strings;
// //     this.newr = 1;

// //     this.getAverage=function(){
// //         console.log(this)
// //         let sum= this.scores.reduce(function(sum,current){
// //             return sum+current;
// //         },0);
// //         return sum/this.scores.length;
// //     }
// //     this.findAndReplace =function(findWord,replaceWord){
// //         let array = this.strings.split(findWord);
// //         if(array.length>=1){
// //             return array.join(replaceWord);
// //         }
// //         return this.strings;
// //     }
// // }

// // function hi(){
// //     console.log(this);
// // }
// // console.log(hi())
// // let student = new Student(1,"ram",[1,2,3,4],"An example string dfsf string df string");
// // console.log(student.getAverage());
// // console.log(student.findAndReplace("string","this"));
// // student.newr =null;

// // delete student.newr;

// // //console.log( student.newr);

// // for(let value in student){
// //     console.log(value,student[value]);
// // }

// // student = 0;
// // //replaceString("string","this")

// // //Multiple Objects
// // let student1 = new Student(1,"ram",[1,2,3,4],"An example string dfsf string df string");
// // let student2 = new Student(2,"ram1",[1,2,3,4],"An example string dfsf string df string");
// // let student3 = new Student(3,"ram2",[1,2,3,4],"An example string dfsf string df string");

// // let studentArray = [student1,student2,student3];
// // let sum =0;
// // for(let student of studentArray){
// //     // for(let value of student.scores){
// //     //     sum+=value;
// //     // }
// //    sum+= student.scores.reduce(function(sum,current){
// //         return sum+current;
// //     },0);
// // }
// // console.log(sum);
// // //print names
// // for(let student of studentArray){
// //     //console.log(student.name)
// //     for(let value in student){
// //         console.log(value);
// //     }
// // }

// //slice
// let string = "Iam a student";
// console.log(string.slice(1,3));
// console.log(string);

// //indexOf
// string = "Iam a student";
// console.log(string.indexOf("student"));
// //lastIndexOf
// console.log(string.lastIndexOf("a"));
// //includes
// console.log(string.includes("a"));

// //Write a program to find the index of a string
// // and remove it from the string
// //trim
// string = "    Iam a student   ";
// console.log(string.trim());
// //repeat
// console.log(string.repeat(3));

// //toFixed
// let a = 12.34
// console.log("Round ",1.35.toFixed(1))
// console.log(a);
// //parseInt
// a = "234dfd33"
// console.log(parseInt(a));
// //parseFloat
// a = "12.45rr";
// console.log(parseFloat(a));
// //Math.round
// a = "12.6";
// console.log(Math.round(a));
// //Math.ceil - ceiled value> original
// a = "-12.1";
// console.log(Math.ceil(a));
// //Math.ceil - floored value < original
// a = "-12.1"; 
// console.log(Math.floor(a));
// //Math.trunc - strip the digits after decimal point.
// a = "-12.1"; 
// console.log(Math.trunc(a));

// //splice
// let array = [3,4,5,67,9];
// //insert
// // console.log(array.splice(1,0,34));
// // console.log(array);
// //delete
// // console.log(array.splice(1,2));
// // console.log(array);
// //replace
// // console.log(array.splice(1,2,45));
// // console.log(array);
// //slice
// // console.log(array.slice(-3));
// // console.log(array)
// //concat
// //console.log(array.concat([[1,2,3]],5,6,67));
// //forEach
//  array = [3,4,5,67,9];
// array.forEach(function(item,index,array){
//     console.log(item);
// });
// //filter
// console.log(array.filter(function(item){
//     return item%2==0;
// }));
// console.log(array);
// //map
// console.log(array.map(function(item,index){
//     return {myNum:item,index:index};
// }));
// console.log(array);
// //reduce
// console.log(array.reduce(function(accumulator,current){
//     return accumulator*current;
// }),1);
// console.log(array);
// //sort
// console.log(array.sort(function(a,b){
//     return a-b;
// }));
// console.log(array.join(""));
// //

// function a(array){
//     let sum = 0;
//     for(let i =0;i<array.length;i++){
//        if(b(array[i]))
//             sum+=array[i]
//     }
// }

function b(num){
    return num%2==0;
}
//student.marks.push()
//student.name =""
//Student Object, store name,id,marks-array,
// getAverage, addMarks, 
//changeName,
//isEligibleForHigherEducation – if average is >80%. 
//SetAddress

function Bank(accountNumber,name,balanceAmount){
 
    this.name = name;
    this.balanceAmount = balanceAmount;
    this.accountNumber = accountNumber;
 
    this.deposit = function( amount){
 
        // if (balanceAmount > amount){
        //     amount = -(amount);
        // }
        this.balanceAmount  = this.balanceAmount +amount;

    }
 
    this.withdraw = function(amount){
        this.balanceAmount  = this.balanceAmount - amount;
        
    }
 
    this.getBalance = function(){
        return balanceAmount;
    }
 
}

let bank = new Bank(1,"name",1000);
let bank1 = new Bank(2,"name2",1500);
let bank2 = new Bank(3,"name3",500);
// Adding all the balances
let bankArray = [bank1,bank2,bank];

//create the length array of names [4,5,5]
let nameLength = [];
for(let bank of bankArray){
    nameLength.push(bank.name.length);
}
console.log(nameLength);
console.log(bankArray.map(function(bank){
    return bank.name.length;
}));

//sum up the balances;
let sum = 0;
for(let value of bankArray){
    sum+=value.getBalance();
}
console.log(sum);
console.log(bankArray.reduce(function(accumulator,current){
    return accumulator+ current.getBalance();
}),0)

//banks that are > 500
let accounts = [];
for (let value of bankArray){
    if(value.getBalance()>500)
    accounts.push(value)
}
console.log(accounts);
// console.log(bankArray.filter(function(account){
//     return account.getBalance()>500;
// }))
console.log(bankArray.filter(item => item.getBalance()>500 ))

//banks that are > 500 and return  the array of
//account holder names length
//findBanks50([]) [3,4]
let nameArrayLe = [];
for (let value of bankArray){
    if(value.getBalance()>500)
        nameArrayLe.push(value.name.length);
}
console.log(nameArrayLe)
let filtered = bankArray.filter(account => account.getBalance()>500);

console.log(filtered.map(account =>account.name.length));

//console.log(bankArray.find(account => account.getBalance()>500));

let arrowFn = account => account.getBalance()>500;

let sumFn = (a,b) => a+b;
 arrowFn = function(account){
    return account.getBalance()>500;
}
console.log(bankArray.find(arrowFn));

function b (fn){
  return fn(4);
}

// b(function(x){
//     console.log(x)
// });
b(x => console.log(x));

function returnFn(x){
    return function(){return x;}
}

console.log(returnFn(5)());
console.log(returnFn);






// //bankArray.forEach()




// // I want to know the balance person named 
// //"name3"
// for(let value of bankArray){
//    if( value.name=='name3')
//        return  value.getBalance();
// }
// // I want to know the balance person acc 
// //"2"
// for(let value of bankArray){
//     if( value.accountNumber=='2')
//         return  value.getBalance();
//  }
// // Change the name of person with the given accountNumber
// function changeName(accountNo,newName){
//     for(let value of bankArray){
//         if( value.accountNumber==accountNo)
//            value.name=newName;
//     }
// }
