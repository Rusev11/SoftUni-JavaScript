function solution() {
    let microelements = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    let recipies = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    }

    function restock(element, quantity) {
        microelements[element] += Number(quantity);
        return 'Success';
    }

    function prepare(meal, qty) {
        let neededIngr = {};
        qty = Number(qty);
        for (let key in recipies[meal]) {
            if (key !== 'order') {
                neededIngr[key] = recipies[meal][key]*qty;
            }
        }
       
        for (let ingr of recipies[meal]['order']) {
            if (neededIngr[ingr] < microelements[ingr]) {
                microelements[ingr] -= neededIngr[ingr];
            } else {
                return `Error: not enough ${ingr} in stock`;
            }
        }
        return 'Success';
    }

    function report() {
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }

    function manager(text) {
        let splitText = text.split(' ');
        switch (splitText[0]) {
            case 'prepare':
                return prepare(splitText[1], Number(splitText[2]));
            case 'restock':
                return restock(splitText[1], splitText[2]);
            case 'report':
                return report();
        }
    }
    return manager;
}

const manager1 = solution();
console.log(manager1('restock carbohydrate 10'));  // Success
console.log(manager1('restock flavour 10'));
console.log(manager1('prepare apple 1'));
console.log(manager1('restock fat 10'));
console.log(manager1('prepare burger 1'));
console.log(manager1('report'));







