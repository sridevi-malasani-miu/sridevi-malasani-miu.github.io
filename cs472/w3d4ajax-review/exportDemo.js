let fn = {
    a: 1, b: 2, get: function (fn) {
        console.log("My function ");
        fn();
        return function () {
            console.log(" Returned Function")
        }
    }
}
//Export a primite data type
//let a = 1;
//module.exports = a;

//Export an array
//let a = [1,2,3];
//module.exports = a;

//Export a function
//let a = function (myFunc){
    // console.log(" Here ",myFunc);
// }
//module.exports = a;
module.exports = fn;
