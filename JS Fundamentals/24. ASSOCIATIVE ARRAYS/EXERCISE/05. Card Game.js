function solve(input) {

    function cardExist(array, card) {
        for (let element of array) {
            if (card === element) {
                return true;
            }
        }
        return false;
    }



    let people = {};


    input.forEach(line => {
        let lineArr = line.split(': ');
        let currentName = lineArr[0];
        let currentCardStack = lineArr[1].split(', ');
        currentCardStack.forEach(card => {
            if (people.hasOwnProperty(currentName)) {
                if (!cardExist(people[currentName], card)) {
                    people[currentName].push(card);
                }
            } else {
                people[currentName] = [];
                people[currentName].push(card);
            }
        });
    });

    let keys = Object.keys(people);
    for (let name of keys) {
        let power = 0;
        let currentCardPower = 0;
        let powerSign;
        let collor;
        people[name].forEach(card => {
            if (!isNaN(card[0]) && !isNaN(card[1])) {
                powerSign = Number(card[0].concat(card[1]));
                collor = card[2];
            } else {
                powerSign = card[0];
                collor = card [1];
            }
            
            if (!isNaN(powerSign)) {
                currentCardPower = Number(powerSign);
            } else {
                switch (powerSign) {
                    case 'J':
                        currentCardPower = 11;
                        break;
                    case 'Q':
                        currentCardPower = 12;
                        break;
                    case 'K':
                        currentCardPower = 13;
                        break;
                    case 'A':
                        currentCardPower = 14;
                        break;
                }
            }
            switch (collor) {
                case 'S':
                    currentCardPower *= 4;
                    break;
                case 'H':
                    currentCardPower *= 3;
                    break;
                case 'D':
                    currentCardPower *= 2;
                    break;
                case 'C':
                    currentCardPower *= 1;
                    break;
            }
            power += currentCardPower;
        });
        
        console.log(`${name}: ${power}`);
    }
}


solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])


