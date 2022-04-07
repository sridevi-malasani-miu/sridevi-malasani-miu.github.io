// // // Linked list

// let list = {value:1};
// list.next = {value:2};
// let newList = {value:3, next:list};
// function get(){
//     console.log(newList.next.next.value);
// }

function iterateList(newList){
    do{
         console.log( newList.value);
        newList = newList.next;
    }while(newList!=null)

}
// iterateList(newList);

let linkedList= {value:"A",next:{value:"C",next:{value:"B",next:{value:"D"}}}};

// // console.log(a.next);
// let b = a.next;
// let c = a.next.next;
// a.next = a.next.next;
// // console.log(a)
// a.next.next = {value:"B"};
// console.log(a);
// get();
// let cd = a.next.next;
// console.log(cd);
// let c = a.next;
// let b = c.next;
// let z = {value:"Z",next:b};
// c.next = z;

// // a.next ={value:"Z",next:a.next.next};
// console.log(JSON.stringify(a));

function printValues(list){
    if(list ==null)
        return;
    console.log(list.value);
    printValues(list.next);
}
printValues(linkedList);

function countNodes(list){
    if(list==null)
        return 0;
    return 1+ countNodes(list.next);
}
console.log(countNodes(linkedList))

function collectNames(list){
    let names = [];
    while(list!=null){
        names.push(list.value);
        list = list.next;
    }
    return names;
}

function collectNamesRec(list){
    if(list ==null)
        return null;
    
   let values = collectNamesRec(list.next)
   return [list.value].concat(values);
}
// console.log(countNodes(linkedList))
console.log(collectNames(linkedList));
console.log(collectNamesRec(linkedList));
