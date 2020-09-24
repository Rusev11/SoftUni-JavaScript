function getFibonator() {
    function fib(n) {
        if (n <= 1) {
            return 1;
        }
        return fib(n - 2) + fib(n - 1);
    }
    let counter = 0;

    return function inner() {
        counter++;
        return fib(counter);
    }
}
let visible = getFibonator();
console.log((visible()));
console.log((visible()));
console.log((visible()));
console.log((visible()));
console.log((visible()));