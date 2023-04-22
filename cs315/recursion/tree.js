function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function printNodes(root) {
    console.log(root)
    console.log(root.value);
    for (let child of root.descendents) {
        printNodes(child);
    }
}
//    printNodes(abe);
// Delete the given node,attach its children to its parent.

function contains(root, target) {
    console.log(root, target)
    if (root.value == target)
        return true;
    let found = false;
    for (let child of root.descendents) {
        found = contains(child, target);
        if (found)
            return true;
    }
    return found;
}
// console.log(contains(abe, 'Maggie'));
//   console.log(containse(root,'Homer'));

//Collect all nodes into Array
function collectNodes(root){
    let array = [root.value];
    for(let child of root.descendents){
        if(child.descendents)
            array = array.concat(collectNodes(child));
    }
    return array;
}

console.log(collectNodes(abe));

//4
function ListNode(value){
    this.value =value;
    this.next =null;
}
const abeList = new ListNode('Abe');
const homerList = new ListNode('Homer');
const bartList = new ListNode('Bart');
const lisaList = new ListNode('Lisa');
const maggieList = new ListNode('Maggie');
abeList.next=homerList;
homerList.next=bartList;
bartList.next=lisaList;
lisaList.next=maggieList;

//addNode
function addNode(root,nodeName,newNode){
    if(root.value==nodeName)
    {
        root.descendents.push(new TreeNode(newNode));
        return;
    }
    for(let child of root.descendents){
        addNode(child,nodeName,newNode)
    }
    return;
}

// addNode(abe,'Lisa','newNode');
// console.log(JSON.stringify(abe))

//deleteNode
function deleteNode(root,nodeName){
    for(let i=0;i<root.descendents.length;i++){
        if(root.descendents[i].value==nodeName)
        {
            root.descendents.splice(i,1);
            break;
        }else
            deleteNode(root.descendents[i],nodeName)
    }
    return;
}

// deleteNode(abe,'Lisa','newNode');
// console.log(JSON.stringify(abe))

//6
function treeModifier(root,modifierFn){
    modifierFn(root);
    for(let child of root.descendents){
        treeModifier(child,modifierFn);
    }
    return;
}
//all caps
// treeModifier(abe,function (node){node.value=node.value.toUpperCase();})
// console.log(abe)
//add stars
// treeModifier(abe,function (node){node.value='***'+node.value+'***';})
// console.log(abe)
//reverseNode
treeModifier(abe,function (node){node.value =node.value.split("").reverse().join("");})
console.log(abe)
