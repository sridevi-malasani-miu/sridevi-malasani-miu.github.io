const assert = require("assert");

function add(a,b){
  return a+b;
}

describe("add",function(){
    it("add",function(){
        assert.equal(add(2,3),5);
    })
})
