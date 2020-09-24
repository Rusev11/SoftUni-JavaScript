function add(a) {
    function sum(b) {
        a += b;
        return sum;
    }
    sum.toString = () => a;
    return sum;
}

console.log(add(3)(4)(5)(6).toString());







