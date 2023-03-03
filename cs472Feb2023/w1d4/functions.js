//Function without parameters
function print(){
    console.log(" Here in add")
}
print();

//Function with one parameter 
//return boolean
function add(a){
    return a>5;
}
checkA(6)

//Function with more than one parameters
//return number
function addAll(a,b,c){
    return a+b+c;
}
addAll(a,b,c);

// return array
function returnArray(){
    let newArray = [];
    for(let i =0;i<3;i++)
    {
        newArray.push(i)
    }
    return newArray;
}

//return string
function returnString(str1,str2){
    return str1+str2;
}