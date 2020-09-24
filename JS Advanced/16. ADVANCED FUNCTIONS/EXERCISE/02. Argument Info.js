function solve() {
    let obj = new Map();
    let results = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
            results.push(`${typeof arguments[i]}: `);
        } else {
            results.push(`${typeof arguments[i]}: ${arguments[i]}`);
        }

        if (obj[typeof arguments[i]]) {
            obj[typeof arguments[i]]++;
        } else {
            obj[typeof arguments[i]] = 1;

        }
    }
    let keys = Object.keys(obj);
    keys.sort((a, b) => obj[b] - obj[a]);
   
    for (let element of keys) {
        results.push(`${element} = ${obj[element]}`);
    
    }
    results.forEach(x=>console.log(x));

}


solve('cat', 42, function () { console.log('Hello world!'); })
