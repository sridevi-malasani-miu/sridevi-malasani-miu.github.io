//Create Empty string
let a = '';
//Create and initiliaze string
let str = "peacock is very colorful";

//Read element at nth(2) position
console.log(str[2]);

//Length of string
console.log(str.length)

//Insert character(s) at nth(3) position 
str = str.substring(0, 3) + " NEW "+ str.substring(3, str.length);

//Delete character(s) at nth(2) position 
str = str.substring(0, (2-1)) +  str.substring(2, str.length);

//Replace character(s) at nth(4) position
str = str.substring(0, (4-1)) + 'REPLACE'+ str.substring(2, str.length);

//Determine whether an element is string or not
console.log(typeof myString=='string')

//Find if character(s) exists or not 
myString.indexOf('h')>-1 //single character
myString.indexOf('peacock')>-1 //given string