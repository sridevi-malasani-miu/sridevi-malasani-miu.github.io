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
