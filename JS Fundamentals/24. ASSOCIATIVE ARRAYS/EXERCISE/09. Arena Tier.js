function solve(input) {
    function handleLineInput(object, line){
        let currentLine = line.split(' -> ');
        if (currentLine.length > 1){
            handleGladiatorInputData(object, currentLine);
        } else {
            currentLine = line.split(' vs. ');
            handleGladiatorsBattle(object, currentLine)
        }
    }

    function handleGladiatorsBattle(object, currentLine){
        
            let name1 = currentLine[0];
            let name2 = currentLine[1];
    }
    function handleGladiatorInputData(object, currentLine) {
        let name = currentLine[0];
        let technique = currentLine[1];
        let skill = currentLine[2];

        if (object[name]) {
            if (object[name][technique] > skill) {
                return;
            } else {
                object[name][technique] = skill;
            }
        } else {
            object[name] = { [technique]: skill };
        }
    }


    let object = {};
    for (let line of input) {
        if( line === 'Ave Cesar'){
            break;
        }
        handleLineInput(object, line);
    }

}


solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]
)


