//Array to Variables
let arr = ["Ilya", "Kantor", "Almond"];
// // sets firstName = arr[0] and surname = arr[1]
// // let [firstName, surname,myA] = arr;
// // console.log(firstName,surname,myA);

// //String Destructure
// let string = "Ilya Kantor Almond";

// // let [firstName, surname,myA] = string.split(" ");
// // let firstName = arr[0];
// // let surname = arr[1];
// // let myA = arr[2];
// //console.log(firstName,surname,myA);

// //Destructure 2
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log( title ); // yConsul

// //Destructure Mixed Array
// let mixedArray = [[1,2],[3,4],"hello",{a:1}];
// let[key1,key2,key3,key4] = mixedArray;
// console.log(typeof key1,typeof key2,typeof key3,typeof key4)

// //Object
// let user = {};
// [user.key1,user.key2] =["value1","value2"];
// console.log(user.key1);

// //Destructure with rest
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(name1,name2,rest)

// let[...rest2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(rest2);

// //small array 
// let[var1,var2]=[1];
// console.log(var2);

// //more elements in array, less variables
// let[varMore1,,,,,varMore2]=[1,2,6,8,4,54];
// console.log(varMore2);
// // default values
// let [nameDef = "Guest", surnameDef = "Anonymous"] = ["Julius"];
// console.log(nameDef); // Julius (from array)
// console.log(surnameDef); // Anonymous (default used

// const team = [ "Bob", "Fred", "Jim"];

// //Object Destructuring
// let options = {
//     titleOp: "Menu",
//     width: 100,
//     height: 200
//     };
// //same order
//     // let {titleOp, width, height} = options;
//     // console.log(titleOp); // Menu
//     // console.log(width); // 100
//     // console.log(height); // 200
//     //change order
//     let { height,width,titleOp} = options;
//     console.log(titleOp); // Menu
//     console.log(width); // 100
//     console.log(height); // 200
// //change names of variables
// let { height:h,width:w,titleOp:titleOpCh} = options;
// console.log(titleOpCh); // Menu
// console.log(w); // 100
// console.log(h); // 200
// //With existing variables
// ({ height,width,titleOp} = {
//     titleOp: "Menu2",
//     width: 130,
//     height: 204
//     });
// console.log(titleOp); // Menu
// console.log(width); // 100
// console.log(height); // 200

// //default values in object
// options = {
// title: "Menu"
// // };
// // ({width = 100, height = 200, title="title"} = options);
// // console.log(title); // Menu
// // console.log(width); // 100
// // console.log(height); // 200

// //  options = {
// //      title: "My menu",
// //     items: ["Item1", "Item2"]
// // };
// // function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
// //     // title, items – taken from options,
// //     // width, height – defaults used
// //     console.log( `${title} ${width} ${height}` ); // My Menu 200 100
// //     console.log( items ); // Item1, Item2
// // }
// //     showMenu(options);


// // //3 remove from team, first two properties, 
// // //have default values in the destructuring 
// // // for (let key in options){
// // //     console.log(key, options[key]);
// // // }

// // for (let [key, value] of Object.entries(options))
// // { console.log(`${key}: ${value}`);}

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };

// let student2 = student;
//     let json = JSON.stringify(student);
//     console.log(json);
//     let student1 = JSON.parse(json);
//     console.log(student1);
//     console.log(student===student1);
//     student.name="Peter"
//     console.log(student,student1);

//     // { "name": "John",
//     // "age": 30,
//     // "isAdmin": false,
//     // "courses": ["html", "css", "js"],
//     // "wife": null }
// let num = [0,1,2,3];

//     let numbers = JSON.stringify(num);
// numbers = JSON.parse(numbers);
// console.log(numbers,numbers[2]);
// num[0]="original"

// console.log(numbers,num)
//{a:1,b:2} //[1,2]
const data = {
    window: {
        title: "Sample Widget",
        width: 500,
        height: 500
    },
    image: {
        src: "images/logo.png",
        coord: [250, 150, 350, 400],
        alignment: "center"
    },
    message: [
        { text: "Save", offset: [10, 30] },
        { text: "Help", offset: [0, 50] },
        { text: "Quit", offset: [30, 10] },
    ],
    // message: {
    //     op1: { text: "Save", offset: [10, 30] },
    //     op2: { text: "Help", offset: [0, 50] },
    //     op3: { text: "Quit", offset: [30, 10] },
    // },
    debug: true
};
//const data = JSON.parse(jsonString);
console.log(data.window.title);
console.log(data.image.src);
console.log(data.image.coord[2]);
//console.log(data.message[0].offset[1]);
console.log(data.message.length);
