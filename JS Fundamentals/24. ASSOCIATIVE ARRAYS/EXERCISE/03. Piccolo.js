function solve(input) {
    let parking = {};
    input.forEach(element => {
        let currentCar = element.split(', ');
        if (currentCar[0] === 'IN') {
            parking[currentCar[1]] = 0;
        } else {
            delete parking[currentCar[1]];
        }
    });

    let parkingKeys = Object.keys(parking);
    parkingKeys.sort((a, b) => {
        if (b > a) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    });
    parkingKeys.forEach(x => console.log(x));
}


solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)


