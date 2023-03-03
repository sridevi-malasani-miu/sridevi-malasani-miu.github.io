function push(array, element) {
    array[array.length] = element;
    return array;
}
console.log(push([1, 2], 3));

function pop(array) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray[i] = array[i]
    }
    return newArray;
}
console.log(pop([1, 2, 3]));

function shift(array) {
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        newArray[i - 1] = array[i]
    }
    return newArray;
}
console.log(shift([1, 2, 3]));

function unshift(array, element) {
    let newArray = [element];
    for (let i = 0; i < array.length; i++) {
        newArray[i + 1] = array[i]
    }
    return newArray;
}
console.log(unshift([1, 2, 3], 4));

function slice(array, start, end) {
    let newArray = [];
    start = start < 0 ? 0 : start;
    end = end > array.length ? array.length : end;
    for (let i = start; i < end; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(slice([1, 2, 3, 4], 1, 2));

function splice(array, start, count, items) {
    //split the array by start Index
    let firstArray = array.slice(0, start)
    let secondArray = array.slice(start);

    //Remove the elements from second Array
    for (let i = 0; i < count; i++) {
        secondArray.shift();
    }
    //Add elements to the second Array
    for (let i=items.length-1;i>=0;i--) {
        secondArray.unshift(items[i]);
    }
    //Merge the arrrays
    for (let ele of secondArray) {
        firstArray.push(ele)
    }
    return firstArray;
}
console.log(" splice output ",splice([1,2,3],0,1,[5,6]))

function multiplesOfFour(array) {
    let newArray = [];
    for (let ele of array) {
        if (ele % 4 == 0)
            newArray.push(ele);
    }
    return newArray;
}
console.log(multiplesOfFour([24, 3, 12, 48]));

//replace element at position 2 to 'orange'
let arra = ['1', '2', '3'];
arra.splice(2, 1, 'orange')
console.log(arra);

// getTypes([50,”apple”,{a:1}]) => [“number 0 : 50”,”string”,”object”]
function getTypes(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(typeof array[i])
    }
    return newArray;
}
console.log(getTypes([50, 'apple', { a: 1 }]));

function appendTypeIndexElement(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(typeof array[i] + i + ":" + array[i])
    }
    return newArray;
}

console.log(appendTypeIndexElement([50, 'apple', { a: 1 }]));
