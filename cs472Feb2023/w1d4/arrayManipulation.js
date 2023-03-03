//create Empty Array
let array = [];
//Create Array with some elements
//string array
let stringArray = ['red','blue','yellow'];
//integers array
let intArray = [40,5,60];
//boolean array
let booleanArray = [true,false];
//multidimensional Array
let multiArray = [[10,2,3],[4,7]];
//Mixed types Array
let mixedTypesArray = [1,[30,4],"string",true];

array = [1,2,3,4,5,6,7]
//Read element at nth(2) position
console.log(array[2]);

//Length of array
console.log(array.length)

//Insert item(s) at nth(3) position 
array.splice(3,0,[1,2,3])// insert array of integers
array.splice(3,0,['pear']);

//Delete item(s) at nth(2) position 
array.splice(2,1)// delete one item
array.splice(2,2);//delete two items from 2 i.e. (2,3)

//Replace items(s) at nth(4) position
array.splice(4,1, 'rose');// Replace one item
//Replace two items at 4,5 with 'lily','jasmine' 
array.splice(4,2, ['lily','jasmine']);

//slice array from position x(2) to y(5).
array.slice(2,5)

//Determine whether an element is array or not
Array.isArray(array);

//Find if an element exists or not in the array
array.indexOf('hello')>-1

//Arrays copied by reference
let a = [1,2];
let b = a;
console.log(a,b);

a.push(3);
console.log(a,b);

a= null;
console.log(a,b);

function clone(array){
    let newArray = [];
    for(let ele of array){
        newArray.push(ele)
    }
    console.log(array,newArray);
    newArray.push(4);
    array.push(7)
    console.log(array,newArray);
}

clone([1,2,3])


