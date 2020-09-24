function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let assert = require('chai').assert;
describe ("sum",function(){
    it("result is equal to sum", function(){
        assert.equal(sum([1,2,3,4,5]), 15, 'is not equal');
    });
});
