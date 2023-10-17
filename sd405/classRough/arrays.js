// let i = 1;
// console.log(i);
// let str = "String";
// let bool = true;
// let evenNumbers = [2, 4, 6, 8];
// let arrayOfStrings = ['apple', 'pear', 'guava']

// // [10,23,4,5,89] -> [10,4]
// //Find Palindrome
// //level -> true
// //apple -false
// function findEven(array) {
//     let evenArray = [];
//     for (let ele of array) {
//         // for(let i=0;i<array.length;i++){
//         // ele[i]
//         if (ele % 2 != 0)
//             evenArray.push(ele)
//     }
//     return evenArray;
// }
// // console.log(findEven([10,23,4,5,89]));

// function isGreaterThan5(num) {
//     if (num > 10)
//         return "greater than 5";
//     else if (num > 5)
//         return "greater than 10"
//     else if (num > 5)
//         return "greater than 10"
//     else if (num > 5)
//         return "greater than 10"
//     else
//         return "less than 5"

// }
// // console.log(isGreaterThan5(67));

// // let obj = {b:"apple"};
// // //Create or update
// // obj.a=2;
// // console.log(" obj after modification ",obj)
// // //Delete a property
// // delete obj.b;

// // console.log(" Afer deletion ",obj);
// // let ab;
// // console.log(ab);
// // let ba = null
// // console.log(ba);


// let obj = {a:1, b:2, c:3};
// //=> when you know the property name
// obj.a 
// //When you dont the know the prperty name, but the variable name that holds the property 
// let myVar = "a";
// obj[myVar]
// print the key whose value is 'apple'


// console.log(obj.a, obj[myVar])
// function objectLoop(obj){
//     for(let key in obj){
//         console.log(" Key Value",key,obj[key]);
//         if(obj[key]=='apple')
//             return key;
//     }
//     return null;
// }

// objectLoop({a:1,b:'apple',c:true});

// function constructKeyArray(obj){
//     let arr = [];
//     for(let key in obj){
//         arr.push(obj[key])
//     }
//     return arr;
// }
// console.log(constructKeyArray({a:1,b:'apple',c:true}));

let array = [1233, "apple", true, [1, 2], { a: 1, b: 2 }];
// Output - [1, 5,4,0,0]
//Array.isArray()
function test(){
    console.log(this);
}
test();
function getTypeArray(ar) {
    let newArray = [];
    for (let i = 0; i < ar.length; i++) {
        if (typeof ar[i] != 'object') {
            newArray.push(ar[i].toString().length)
        } else {
            if (Array.isArray(ar[i]))
                newArray.push(ar[i].length)
            else
                newArray.push(0);
            // newArray.push(Array.isArray(ar[i]) ? ar[i].length : 0)
        }

    }
    return newArray
}

// console.log("sdfdfsdfsdfsd".length)
// console.log("sdfdfsdfsdfsd".length)

// console.log(getTypeArray(array));
// console.log(1!=1)
// == equals -
// === strict equals
// != not equal
// !== not strict equals




let myArray = ['apple', 'pear'];

// myArray[0]='grapes';
// myArray[2]='lastElement'
function pushElement(newElement, array) {
    array[array.length] = newElement;
}

// console.log(array);

// array[1]= 50;
// console.log(array);

//remove element whose value is 40
// add 50 after '40' 


// let array = [2, "apple", "banana", [1, 2]]

let newarray = [];
let array1 = [123, "apple", true, [1, 2], { a: 1, b: 2 }];
function lengthofarray(array) {

    for (let i = 0; i < array.length; i++) {

        newarray.push(array[i].toString().length)

    }

    return newarray;



}

// console.log(lengthofarray(array1))
