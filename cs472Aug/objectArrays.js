// Destructure Array
// From the given array, build an object that has array elements as
// properties. The name of the property is
// <typeof the element>+index
// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}} 

function destructureArray(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[typeof array[i] + i] = array[i]
    }
    return obj;

}
console.log(destructureArray([50, "apple", { a: 1 }]));

// Transform Array to print the type of elements in the Array  
// getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]

function getTypes(array) {
    let newArray = [];
    for (let ele of array) {
        newArray.push(typeof ele)
    }
    return newArray;

}
console.log(getTypes([50, "apple", { a: 1 }]))

// convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
// => [a1,b12,cstring,dx1,dy2]

function convertObjectToArray(obj) {
    let newArray = [];
    for (let key in obj) {
        if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
            let value = obj[key];
            console.log(value)
            for(let key1 in value){
                newArray.push(key+key1 +value[key1])
            }
        } else if (Array.isArray(obj[key])) {
            let string ='';
            for(let element of obj[key]){
                string+=element;
            }
            newArray.push(key+string)
        } else {
            newArray.push(key + obj[key])
        }

    }
    return newArray;
}
    console.log(convertObjectToArray({ a: 1, b: [1, 2], c: "string", 
    d: { x: 1, y: 2 } }));


    // findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>
// {name:’Lakshman’,age:15}
function findYounger(array){
    for(let ele of array){
        if(ele.age>=13 && ele.age<=17)
            return ele;
    }
    return null;
}
console.log(findYounger([{name:'Ram',age:20},{name:'Lakshman',age:15}]))
//findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>15
function findYoungerAge(array){
    let min = array[0].age;
    for(let ele of array){
        if(ele.age<min)
            min = ele.age;
    }
    return min;
}
console.log(findYoungerAge([{name:'Ram',age:20},{name:'Lakshman',age:15}]))

function findYoungerPerson(array){
    let min = array[0].age;
    let name = "";
    for(let ele of array){
        if(ele.age<min){
            min = ele.age;
            name = ele.name
        }
            
    }
    return name;
}

console.log(findYoungerPerson([{name:'Ram',age:20},{name:'Lakshman',age:15}]))
