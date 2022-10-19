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

function contains(abe, nodeName) {
    if (abe.value == nodeName)
        return true;
    for (let child of abe.descendents) {
        let result = contains(child, nodeName);
        if (result)
            return true;
    }
    return false;
}
console.log(contains(abe, 'Lisa'))

function countLeafNodes(abe) {
    if (abe.descendents.length == 0)
        return 1;
    let count = 0;
    for (let child of abe.descendents) {
        count = count + countLeafNodes(child);
    }
    return count;
}
//Abe, count = 0
//homer, count =0, lisa,bart,maggie,
// console.log(countLeafNodes(abe,'Abe'))

function countParentNodes(abe) {
     if(abe.descendents.length==0)
        return 0;
    let count = 1;
    for (let child of abe.descendents) {
        count = count+ countParentNodes(child);
    }
    return count;
}
console.log(countParentNodes(abe));

function flattenTree(abe){
    let names = [abe.value];
    for(let child of abe.descendents){
        names = names.concat(flattenTree(child));
    }
    return names;
}
console.log(flattenTree(abe))
