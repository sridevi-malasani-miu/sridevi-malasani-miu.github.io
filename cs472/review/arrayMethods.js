let objArray =[{name:"a",age:20},{name:"b",age:14},{name:"c",age:40}];

// Sum up the ages 
console.log(objArray.reduce(function (accumulator,element,index,array){
    // console.log(accumulator, element,index);
    return accumulator+element.age;//return gets into accumulator
},0));
let array = [];
console.log(array.push("hello"));

// return array of names
console.log(objArray.reduce(function (accumulator,element,index,array){
    accumulator.push(element.name);
    return  accumulator;
},[]));

