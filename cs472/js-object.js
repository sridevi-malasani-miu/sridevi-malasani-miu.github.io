
function findObjectWithProp(array, prop) {
    let objArray = [];
    for (let ele of array) {
        console.log(ele, ele[prop]);
        if (ele.hasOwnProperty(prop)) {
            let temp = {};
            temp[prop] = ele[prop];
            objArray.push(temp)
        }
    }
    return objArray;
}

console.log(findObjectWithProp([{ a: null, b: 2 }, { a: 2, b: 4 }], 'a'));

function findYounger(arry) {
    let myObj = arry[0].name;
    let min = arry[0].age;
    for (let ele of arry) {
        if (ele.age < min) {
            myObj = ele.name;
            min = ele.age;
        }
    }
    return myObj
}

// console.log(findYounger([{name:"Ram",age:20},{name:"Lakshman",age:15}]));

function convertObjectToArray(obj) {
    let myArray = [];

    for(let key in obj){
        let value = obj[key];
        if(Array.isArray(value)){
            let arrayValues = ''
            for(let ele of value){
                arrayValues+=ele;
            }
            myArray.push(key+arrayValues)
        }else if(typeof value=='object'){
            for(let key1 in value){
                myArray.push(key+key1+value[key1])
            }
        }else{
            myArray.push(key+value)
        }
    }
    return myArray;
}
console.log(convertObjectToArray({ a: 1, b: [1, 2], 
    c: "string", d: { x: 1, y: 2 } }));// [a1,b12,cstring,dx1,dy2]























