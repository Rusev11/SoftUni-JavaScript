function solve(input) {
    class Heroe {
        constructor(name, level) {
            this.name = name;
            this.level = level;
        }
    }

    function handleInput(input) {
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].split(' / ');
            if (input[i][2]) {
                input[i][2] = input[i][2].split(', ');
            }
        }
    }

    function sortLevel(input) {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[j].level < input[i].level) {
                    let current = input[i];
                    input[i] = input[j];
                    input[j] = current;
                }
            }
        }
    }

    function sortItems(input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i].items != undefined) {
                input[i].items.sort(function (a, b) {
                    let itemA = a.toLowerCase();
                    let itemB = b.toLowerCase();
                    if (itemA < itemB) { 
                        return -1;
                    }
                    if (itemA > itemB){
                        return 1;
                    }
                    return 0; 
                });
            }
        }
    }

    let heroes = [];
    handleInput(input);

    for (let i = 0; i < input.length; i++) {
        heroes[i] = new Heroe(input[i][0], input[i][1]);
        if (input[i][2] != undefined) {
            heroes[i].items = input[i][2];
        }
    }

    sortLevel(heroes);
    sortItems(heroes);


    for (let element of heroes) {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        if (element.items != undefined) {
            let printItemps = element.items.join(', ');
            console.log(`items => ${printItemps}`);
        }
    }

}


solve([
    "Isacc / 25 / Apple, apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"

]

)


