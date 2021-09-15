const assert = require("assert");
const d32tree = require("./d32tree.js");
const getMatchingTree = d32tree.getMatchingTree;

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


describe.only("getMatchingTree tests", function () {
   
    it("Match - Lisa Node", function () {
        assert.deepStrictEqual(getMatchingTree(abe,"Lisa"), lisa);
    });
    it("No Match expect null", function () {
        assert.equal(getMatchingTree(abe,"Lia"), null);
    });
    it("Match - Homer Node", function () {
        assert.equal(getMatchingTree(abe,"Homer"), homer);
    });

});
