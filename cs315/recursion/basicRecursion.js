    console.log(findFirstIndexOf(['apple', 'banana', 'apple'], 'apple'))//0
    console.log(findLastIndexOf(['apple', 'banana', 'apple'], 'apple'))//2

function findFirstIndexOf(array,str){
    if(array.length==0)
        return -1;
    if(array[0]==str)
        return 0;
    let index = findFirstIndexOf(array.slice(1),str);
    if(index==-1)
        return index;
    return 1+index;
}

function findLastIndexOf(array,str){
    console.log(array,str)
    if(array.length==0)
        return -1;
    if(array[array.length-1]==str)
        return array.length-1;
    let index = findFirstIndexOf(array.slice(0,array.length-2),str);
    if(index==-1)
        return index;
    return 1+index;
}
