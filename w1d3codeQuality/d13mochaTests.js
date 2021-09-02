const assert = require("assert");
const methods = require("./codeQuality.js");
const isVowel = methods.isVowel;
const computeSalesCommission = methods.computeSalesCommission;
const calcDownpayment = methods.calcDownpayment;

describe("computeSalesCommission",function(){
    it("computeSalesCommission",function(){
        
    })
});

describe("calcDownpayment",function(){
    it("calcDownpayment",function(){
        assert.equal(calcDownpayment())
    })
})

describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    }); 
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    }); 
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});
