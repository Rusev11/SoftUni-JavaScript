function solve(name, surname, age) {
    let object = {name: name, familyName: surname, age: age}
    for (let key in object){
        console.log(`${key}: ${object[key]}`);
    }

}




solve("Peter", 
"Pan",
"20"
)
