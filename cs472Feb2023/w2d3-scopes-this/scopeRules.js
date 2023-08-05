//Function doesnot find variable, 
//it looks for it in nearest scope
// let x = 1;
// function a(){
//     function b(){
//         console.log(x);
//     }
// }
// a();
// console.log(x);

//local variable x is changed, doesnt affect the global variable
// let x = 1;
// function a(){
//     let x=2;
//     console.log(x);
// }
// a();
// console.log(x);

//Declare new variable after changing the global variable, local variable is created, global
//variable remains unchanged. 
// let x = 1;
// function a(){
//     console.log(x);
//     x=2;
//     console.log(x);
//     var x = 4;
// }
// a();
// console.log(x);

//Object pass by reference
// let x = {a:1};
// function a(x){
//     x.a = 4;
//     console.log(x);
// }
// a(x);
// console.log(x);

//parameter x is changed, doesnt affect the global variable
//variable pass by value
// let x = 1;
// function a(x){
//     x = 4;
//     console.log(x);
// }
// a(x);
// console.log(x);

//Object reassigned inside function, doesnt change the outside object
// let x = {a:1};
// function a(x){
//     x={a:4};
//     console.log(x);
// }
// a(x);
// console.log(x);

//Function called with x before it is changed will have the previous value.
let x = 1;
function a(x) {
    return x;
}
console.log(a(x))
x = 5
