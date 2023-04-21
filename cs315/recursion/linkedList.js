let el4 =
{
    value: 4,
    next: null
};
let el3 =
{
    value: 3,
    next: el4
};
let el2 =
{
    value: 2,
    next: el3
};
let list =
{
    value: 1,
    next: el2
};
//Print All Nodes
function printValues(list) {
    if (list != null) {
        console.log(list.value);
        printValues(list.next)
    }
}
//printValues(list)
//Reverse print All Nodes
function printReverse(list) {
    let string ='';
    if(list==null)
        return string;
    string=printReverse(list.next)+'\n'+list.value;
     return string;
}
console.log(printReverse(list) );

//Append all nodes
function appendValues(list) {
    let values = '';
    if (list != null) {
        let separator = list.next ? '->' : ''
        values += list.value + separator + appendValues(list.next);
    }
    console.log(values)
    return values;
}
// console.log(appendValues(list))//1->2->3->4

//Count number of nodes
function countNodes(list) {
    if (!list)
        return 0;
    return 1 + countNodes(list.next)

}
// console.log(countNodes(list))//4
//Find If node exists
function checkIfNodeExists(list, nodeName) {
    console.log(list, nodeName)
    if (!list)
        return false;
    if (list.value == nodeName)
        return true;
    return checkIfNodeExists(list.next, nodeName);
}
// console.log(checkIfNodeExists(list, '3'))//true
// console.log(checkIfNodeExists(list, '5'))//false

//Print an array of node names
function arrayOfNodes(list) {
    let values = [];
    if (list != null)
        values = [list.value].concat(arrayOfNodes(list.next));
    return values;
}
// console.log(arrayOfNodes(list))//[1,2,3,4]

//Add a new node after the particular node
function addNodeAfter(list, nodeName, newNode) {
    if (!list)
        return;
    if (list.value == nodeName) {
        let temp = list.next;
        list.next = { value: newNode, next: temp };
        return;
    }
    return addNodeAfter(list.next,nodeName,newNode);
}
// addNodeAfter(list, 2, 'New Node');
// console.log(JSON.stringify(list));
//{"value":1,"next":{"value":2,"next":{"value":"New Node","next":{"value":3,"next":{"value":4,"next":null}}}}}

//Delete a new node after the given node
function deleteNodeAfter(list, nodeName) {
    if (!list)
        return;
    if (list.value == nodeName) {
        list.next = list.next.next;
        return;
    }
    return deleteNodeAfter(list.next,nodeName);
}
// deleteNodeAfter(list, 2);
// console.log(JSON.stringify(list));
// {"value":1,"next":{"value":2,"next":{"value":4,"next":null}}}

//Print sub linked list
function subList(list, nodeName) {
    if (!list)
        return;
    if (list.value == nodeName) {
        return list;
    }
    return subList(list.next,nodeName);
}
// console.log(subList(list, 3));
//{ value: 3, next: { value: 4, next: null } }

