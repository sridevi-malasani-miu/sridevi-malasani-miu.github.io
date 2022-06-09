var app = require("./exportDemo");
console.log(app);

app.get(function(){
    console.log(" My function argument");
})();

// //Read primitive data type
// console.log(app);//1

// //Read function
// app();

// //Read array
// console.log(app);//Array
