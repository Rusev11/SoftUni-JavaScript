function solve(input) {
    let people = Number(input.shift());
    let lift = input.shift().split(' ');
    let wagon = 0;
    while (wagon < lift.length && people > 0) {
        if (lift[wagon] < 4) {
            lift[wagon]++;
            people--;
        } else {
            wagon++;
        }
    }
    if (people === 0) {
        console.log('The lift has empty spots!');
        console.log(lift.join(' '));
        return;
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lift.join(' '));
        return;
    }
    if (people === 0 && lift[lift.length - 1] === 4) {
        console.log(lift.join(' '));
        return;
    }

}

solve(["15",
"0 0 0 0 0"
]
)


