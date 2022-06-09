let primitveVar = 1;
let myArray = [1,2,3];
let myFunc = function(args){
    console.log(" Here ",args);
}

let myObject = {
    a: 1, b: 2, get: function (fn) {
        console.log("My function ");
        fn();
        return function () {
            console.log(" Returned Function")
        }
    }
}

//Export Object
module.exports = myObject;

// //Export a primite data type
// module.exports = primitveVar;

// //Export a Array
// module.exports = myArray;

// //Export a function
// module.exports = myFunc;
