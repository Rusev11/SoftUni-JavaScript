function solve(input) {
    let towns = {};
    for(let line of input){
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if (towns[town]){
            towns[town] += population;
        } else {
            towns[town] = population;
        }
    }
    let keys = Object.keys(towns);
    keys.forEach(city => console.log(`${city} : ${towns[city]}`));
}

solve(
    ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
    
)
