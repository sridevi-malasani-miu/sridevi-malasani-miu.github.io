let myArray = [];
myArray = ["apple","banana","grapes"];
console.log(myArray);

myArray[1]="pear"
console.log(myArray);

myArray[3]=1;
console.log(myArray);

myArray[4]=true;
console.log(myArray, typeof myArray[4], typeof myArray[3])

console.log(myArray.length);
myArray[10]="";
console.log(myArray, myArray.length);


myArray[4]=null;
console.log(" null assignment",myArray);



for(let myNumber of myArray){
    console.log(myNumber);
}

console.log(typeof myArray)

let array1 = [1,2,"3"];
let array2= [1,2,3];
console.log(array1==array2, array1===array2);

let index =0;

// array1[0]==array2[0];
// array1[1]==array2[1];

for(let array1Num of array1){
       if(array1Num!=array2[index]){
            console.log(" Not equal");
            break; 
       }
       index++;
}

let complexArray = [1,2,true,"string"];

for(let each of complexArray){
console.log("Type of Array ",typeof each, typeof complexArray);
}

let fruitsArray = ["apple","banana","pear"];
console.log(fruitsArray.length);
fruitsArray.shift();
console.log(fruitsArray,fruitsArray.length);

fruitsArray.unshift("jackfruit");
//fruitsArray[0] ="jackfruit"
console.log(fruitsArray,fruitsArray.length);

fruitsArray.push("grapes");
console.log(fruitsArray,fruitsArray.length);

fruitsArray.pop();
console.log(fruitsArray,fruitsArray.length);

let arrayOne = [1,2,3];
let arrayTwo = arrayOne;
console.log(arrayOne==arrayTwo);

arrayOne[3]=4;
console.log(arrayOne,arrayTwo);

arrayTwo[4]=5;
console.log(arrayOne,arrayTwo);

// let x = 4;
// let y =x;
// y++;
// console.log(y,x);

let arrayThree = [];
let indexT =0;
for(let eachElement of arrayOne){
    arrayThree[indexT++]=eachElement;
}
console.log(arrayThree==arrayOne);
arrayThree[5]=6;
console.log(arrayThree,arrayOne);
arrayOne[0]=10;
console.log(arrayThree,arrayOne);


// let sree = [];
// sree["type"] = 25;
// sree["name"] = "String";
// console.log(sree["type"],sree["name"]);
// sree.push(2);
// sree[2]=3;
// sree[1] = 4;
// //sree.push(2);
// console.log("Array with name property ",sree,sree.length);
// for(let eachElement of sree){
//     console.log(eachElement, typeof eachElement);
// }

// // Returns a random integer from 0 to 100:
// console.log( " Random Number" ,Math.floor(Math.random() * 11));
