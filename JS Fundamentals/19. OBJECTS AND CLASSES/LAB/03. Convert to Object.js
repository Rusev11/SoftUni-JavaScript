function solve(input) {
    let object = JSON.parse(input);

    for (let key in object){
        console.log(`${key}: ${object[key]}`);
    }
}






solve('{"name": "George", "age": 40, "town": "Sofia"}'
)
