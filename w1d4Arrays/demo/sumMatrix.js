function sumMatrix(multiDimensionalArray){
    let matrixSum =0;
    for(let eachElement of multiDimensionalArray){
        //console.log(eachElement, typeof eachElement, typeof multiDimensionalArray);
        console.log(eachElement);
        for(let innerElement of eachElement){
           // console.log(typeof innerElement);
           console.log(innerElement);
            matrixSum+=innerElement;
        }
    }
    return matrixSum;
}
var multiDimensionalArray = [[1,2,5],[4,5,6],[1,2,3]];

console.log(multiDimensionalArray[1][2]);
console.log(sumMatrix(multiDimensionalArray));
