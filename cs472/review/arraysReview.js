// Create Array empty/some elements,
let array = [];
let array2 = [{a:1},"string",34];
let obj = array2[0];
obj.a = 10;
// 6. Length of array
console.log(array2.length)
// let obj = {a:1};
// let obj1 = obj;
// obj1.a= 10;
console.log(array2)
let arrayOfSingleType = ["apple","banana","pear"];
// 2. Update Array - change the value of element at nth position,
array2[2]="Updated String";
console.log(array2);
//Find Index of element
console.log(array2.indexOf("string"));
//Find if an element exists or not
console.log(array2.indexOf("hello")>=0);
// 3. Delete Item/items - remove the element at nth position
array2[1]=null;//Not this
//delete array2[1];
console.log(array2,array2.length);
array2.splice(1,1);//delete One element
console.log(array2,array2.length)
//Insert element/elements at nth position -- Splice
array2.splice(1,0,[1,2],[3,4]);
console.log(array2, array2.length);
// 4. Delete Array/Empty Array/Copy Array/Clone Array( Both arrays
// should be changed independently without changing the Others)
let copyArray = array2;
console.log(copyArray);

// 5. Get subset of array
array2.push("x");
array2.push("y");
let slicedArray = array2.slice(1,3);
console.log("Sliced Array ",array2,slicedArray);
// 7. Splice/slice/concat
let newArray = [1,2];
let mergedArray = array2.concat(newArray);
console.log("Concatened Array ", array2.length,newArray.length,mergedArray.length);
//Determine whether the variable is of array or not
console.log(Array.isArray(newArray));
