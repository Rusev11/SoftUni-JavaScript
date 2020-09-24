function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let assert = require('chai').assert;
describe ('checking sum', function () {
    it ('check sum', function(){
        assert.equal(sum(['1','2','3']),6,'the sum is wrong');
    })
})
