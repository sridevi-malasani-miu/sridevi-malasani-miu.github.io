// // // indexOf string without using built-in function
// // function indexOf(string,searchString){
// //     let index=-1;
// //     for(let i=string.length-1;i>=0;i--){
// //         console.log(i,string.charAt(i))
// //         if(string.substring(i,i+searchString.length)==searchString)
// //             return i;
// //     }
// //     return index;
// // }

// // // console.log(indexOf("apple",'le'))

// // function includes(string,searchString){
// //     for(let i=string.length-1;i>=0;i--){
// //         if(string[i]==searchString)
// //             return true;
// //     }
// //     return false;
// // }
// // console.log(includes(['a','b','c'],'c'))

// // let obj = { a: 1, b: 2, c: 'string', d: { e: 10, f: 20 }, g: true, h: [3, 4], f2: function () { console.log("hello") } };

// // let f1 = function sum() {
// //     return 10;
// // }
// // console.log(f1());

// // let obj1 = {};
// // obj1.a = 10;
// // obj1.b = 'string';
// // obj1.a = [10,30];
// // console.log(obj1);

// // delete obj1.a;
// // console.log(obj1);
// // let obj1 = null;

// // console.log(typeof [10,20]);

// // let a= [10,20,30];
// // let b = a;
// // b.pop();
// // console.log("a,b ",a,b);

// // let x = 10;
// // let y = x;
// // x= x+10;
// // console.log(x,y)

// // let obj = {a:1,b:2}
// // let obj1 = obj;
// // obj.a= 30;
// // console.log(obj,obj1);

// // function cloneArray(array){
// //     let newArray = [];
// //     for(let ele of array){
// //         newArray.push(ele)
// //     }
// //     return newArray;
// // }

// // let arr1=[10,20,30];
// // let arr2 = cloneArray(arr1);
// // console.log(arr1,arr2);

// // arr1.push(40);
// // console.log(arr1,arr2);

// // let obj = {a:1,b:2};
// // // console.log(obj.a,obj.b);
// // // let key = 'a';
// // // console.log(obj.key,obj[key])

// // for(let key in obj){
// //     console.log(key,obj[key]);
// // }

// let arr = ['a','b','c'];
// //update item at 1st position to 'd'
// // arr.splice(1,1,'d');
// // console.log(arr);

// //if arr has 'b' update it to 'd'

// function changeArray(array,str,replaceStr){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==str){
//             array[i]=replaceStr;
//             return array;
//         }
//     }
//     return array;
// }

// // console.log(changeArray(arr,'b','d'));
// // given array, create array of its lengths
// let myArray = [4,8,9];// [4,6]
// function map(array){
//     let newArray =[];
//     for(let ele of array){
//         newArray.push(ele+3)
//     }
//     return newArray;
// }


// function filter(array){
//     let newArray =[];
//     for(let ele of array){
//         if(ele%4==0)
//             newArray.push(ele)
//     }
//     return newArray;
// }


// // function reduce(array){
// //     let sum = 0;
// //     for(let ele of array){
// //         sum+=ele;
// //     }
// //     return sum;
// // }
// // console.log(reduce(myArray))
// // unique(['a','a''c'])- ['a','c']

// // unique([10,20,10])- [10,20]

// function transform(array){
//     let newArray = [];
//     for(let ele of array){
//         newArray.push(typeof ele)
//     }
//     return newArray;
// }
// // console.log(transform([10,'strong',false,30,{a:1}]))

// // destructureArray([50,”apple”,{a:1}])=>
// // {number0:50,string1:”apple”,object2:{a:1}} 

// function destructure(array){
//     let obj = {};
//     for(let i=0;i<array.length;i++){
//         let key = typeof array[i]+i;
//         obj[key]=array[i];
//     }
//     return obj;
// }
// // console.log(destructure([50,'apple',{a:1}]));

// // convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
// //     => [a1,b12,cstring,dx1,dy2]

// function convertObjectToArray(obj){
//     let array = [];
//     for(let key in obj){
//         let value = obj[key];
//         if(typeof value!='object'){
//             array.push(key+value);
//         }
//         else if(Array.isArray(value)){
//             let values = ''
//             for(let ele of value){
//                 values+=ele;
//             }
//             array.push(key+values);
//         }else{
//             for(let key1 in value){
//                 array.push(key+key1+value[key1]);
//             }
//         }
//     }
//     return array;
// }
// // console.log(convertObjectToArray({a:1,b:[1,2],c:"string",d:{x:1,y:2}}))

// // Get the Youngest person name
// // findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>15

function findYounger(objArray){
    let age=objArray[0].age;
    let myName=objArray[0].name;
    for(let ele of objArray){
        if(ele.age<age){
            age= ele.age;
            myName = ele.name;
        }
    }
    return myName;
}
console.log(findYounger([{name:"Ram",age:20},{name:"Lakshman",age:15}]));
// findYounger([{name:"Ram",age:20},{name:"Lakshman",age:15}]);

function getUniqueList(array){
    let newArray = [];
    for(let ele of array){
        if(!newArray.includes(ele))
            newArray.push(ele)
    }
    return newArray;
}
console.log(getUniqueList([10,20,30,10,20]));
