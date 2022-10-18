let el4 ={
    value: 4,
    next: null
};
let el3 ={
    value: 3,
    next: el4
};
let el2 ={
    value: 2,
    next: el3
};
let list ={
    value: 1,
    next: el2
};

function print(list){
    console.log(list.value);
    if(list.next)
        print(list.next);
}

function print(list){
   while(list.next){
        console.log(list.value);
        list =list.next;
   }
   console.log(list.value)
}

print(list)
// console.log(" First one ",JSON.stringify(list));
//Split
// let secondList = list.next.next;
// list.next.next=null;
// console.log(JSON.stringify(list),secondList);

//Remove 2
// let element3 = list.next.next;
// list.next = element3;
// console.log(JSON.stringify(list))

//Add element between 2 and 3
// let newElement = {value:'2.5'};
// let element2 = list.next;
// let element3 = list.next.next;
// element2.next = newElement;
// newElement.next = element3;
// console.log(JSON.stringify(list))

//Remove last element
// list.next.next.next =null;
// console.log(JSON.stringify(list))

//Remove first element
// let secondElement = list.next;
// list = secondElement;
// console.log(JSON.stringify(list))

//Add First element
// let newElement = {value:'0.5'};
// newElement.next = list;
// list = newElement;
// console.log(JSON.stringify(list))


//Combine Parts
// list.next.next = secondList;
// console.log(JSON.stringify(list));
