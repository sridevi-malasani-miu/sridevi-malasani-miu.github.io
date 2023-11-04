let a = {};
let b = { a: 1, b: 2, c: "apple", d: ["apple", 'Pear'], name: 'wap', age: 30 };
// console.log(a,b);

//update
// console.log(b.c);
b.a = b.a + 2;
b.d.push('grapes');
// console.log(b.a,b.d);

//insert
b.e = "Earth";
// console.log(b);

//delete
delete b.a;
// console.log(b);

//update to different type
b.b = ['newarray'];
// console.log(b);

//Read property by variable name
// console.log(b.name);
// let propName = 'name';
// console.log(b[propName])

// let tempArray = [];
// for(let key in b){
// console.log(key, b[key]);
//     tempArray.push(b[key])
// }
// console.log(tempArray)

//Inverse
// let simpleObj ={name:'wap',age:30,skill:'javascript'};
// let newObj = {};
// for(let key in simpleObj){
//     newObj[simpleObj[key]]=key;
// }
// console.log(newObj);

// Collect names
// let objArray = [{name:'wap',id:'472'},{name:'ea',id:'568'}];
// let nameArray = [];
// for(let ele of objArray){
//     console.log(ele);
//     nameArray.push(ele.name);
// }
// console.log(nameArray);

//Find the course that has greater id 
// let objArray = [{name:'wap',id:'472'},{name:'ea',id:'568'}];
// let maxCourseId=0;
// let maxCourseObj ;
// for(let ele of objArray){
//     // console.log(ele);
//     if(maxCourseId<ele.id){
//         maxCourseId=ele.id;
//         maxCourseObj = ele;
//     }
// }
// console.log(maxCourseObj);



// console.log(typeof {a:1,b:2});
// console.log(typeof [10,20]);

let arr1 = [3, 4];
// let arr2 = arr1;
// arr1.push(9);
// let arr2 = [];
// for(let ele of arr1){
//     arr2.push(ele);
// }
// let arr2 = [...arr1];

// console.log(arr1,arr2);
// arr2.push(9);
// console.log(arr1,arr2)
// console.log(arr1,arr2);

// let num1= 10;
// let num2 = num1;
// num2=num2+1;
// console.log(num1,num2);

// convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}} 

let obj = { a: 1, b: 2, c: [10, 20], d: { x: 1, y: 2 } }
//[a1,b2]
function convert(obj) {
    let array = [];
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            let str = '';
            for (let ele of obj[key]) {
                str += ele;
            }
            console.log(str)
            array.push(key + str);
        } else if (typeof obj[key] == 'object') {
            let objValue = obj[key];
            for (let key1 in objValue) {
                array.push(key + key1 + objValue[key1])
            }
        }
        else
            array.push(key + obj[key]);
    }
    return array;
}
// console.log(convert(obj));

// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}}

function destructureArray(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[typeof array[i] + i] = array[i];
    }
    return obj
}
// console.log(destructureArray([50,'apple',{a:1}]));

function arrayToString(array) {
    let stringOutput = '';
    for (let ele of array) {
        stringOutput += ele + ",";
    }
    let string = stringOutput.substring(0, stringOutput.length - 1)
    return string;
}
// console.log(arrayToString(['a','b','c']));

// function minifyObject(objArray){
//     let finalArray = [];
//     for(let ele of objArray){
//         finalArray.push({a:ele.a});
//     }
//     return finalArray;
// }
// console.log(minifyObject([{a:1,b:2,c:2},{a:2,b:3,c:4}]))


function minifyObject(objArray) {
    let finalArray = [];
    for (let ele of objArray) {
        let tempObj = {};
        for (let key in ele) {
            if (key != 'a'){
                tempObj[key]=ele[key];
            }
       }
       finalArray.push(tempObj);
    }
    return finalArray;
}
console.log(minifyObject([{ a: 1, b: 2, c: 2 }, { a: 2, b: 3, c: 4 }]))

