// 1. 
// let grapes = "green"; 

  

// function fruits(){ 

//     return function(message){ 

//         return grapes; 

//     } 

// } 

// console.log(fruits()()); 


// 2. 
// let x = 10; 

// function globalVar(){ 

//     return function(){ 

//        return x; 

//     } 

// } 

// x = 20; 

// let fn = globalVar(); 

// console.log(fn ()); 



 

// 3. 
// function sport(message){ 

//     message = "Hi"; 

//     return function(message){ 

//         return message; 

//     } 

// } 

// let sportFn = sport("Hello"); 

// console.log(sportFn ()); 



 

// // 4. 
// function test(x){ 

//     x = 10; 

//     x++; 

//     return function(){ 

//         return x++; 

//     } 

// } 

// console.log(test(2)()) 
 
 

// // 5.
// function car(){ 

//     let color = "white"; 

//     function seat(){ 

//         let color = "brown"; 
//         console.log(color)//___________

//     } 

//     console.log(color)//___________

// } 

// car("black") 


// 6. 
// function department(){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments);
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language)

//     } 

//     console.log(language) 

// } 

// department() 



 

// // 7. 
// function department(language){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments)
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language);

//     } 

//     console.log(language) 

// } 

// department("java"); 



 
