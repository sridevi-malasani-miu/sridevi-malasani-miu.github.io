
function findAverage(numberArray){
    let sum =0;
    for(let i =0;i<numberArray.length;i++){
       // console.log(numberArray[i]);
        sum+=numberArray[i];
    }
    //console.log(sum/numberArray.length)
    return sum/numberArray.length;
}
let numberArray = [10,20,30,40,50];
console.log(findAverage(numberArray));
let numberArray2 = [10,20,30,40,50,60,70,80,90];
console.log(findAverage(numberArray2));