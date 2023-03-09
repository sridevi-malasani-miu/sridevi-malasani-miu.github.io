let myString = 1;


function print(){
    console.log("Inside Exporter ", myString);
}
function change(value){
    myString = value;
}


module.exports = {print:print,change:change,myString:myString};
// Objects, strings, arrays, boolean 
