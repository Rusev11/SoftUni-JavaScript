function solve(input) {
    let route = input.shift();
    let line = input.shift();
    while (line !== 'Travel') {
        let lineArr = line.split(':');
        let command = lineArr[0];
        switch (command) {
            case 'Add Stop':
                let index = Number(lineArr[1]);
                if (index >= 0 && index < route.length) {
                    route = route.slice(0, index) + lineArr[2] + route.slice(index);
                }
                break;
            case 'Remove Stop':
                let indexStart = Number(lineArr[1]);
                let indexEnd = Number(lineArr[2]);
                if (indexStart >= 0 && indexStart < route.length && indexEnd >= 0 && indexEnd < route.length) {
                    route = route.slice(0, indexStart) + route.slice(indexEnd + 1);
                }
                break;
            case 'Switch':
                let pattern = new RegExp(lineArr[1],'gi') ;
                route = route.replace(pattern, lineArr[2]);
                break;
        }
        console.log(route);
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${route}`);
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
)


