let myObj = {a:1};

function print(){
    console.log("Inside Exporter ", myObj);
}
function change(value){
    myObj.a =value;
}

module.exports = {print:print,change:change,myObj:myObj};
// Objects, strings, arrays, boolean 
