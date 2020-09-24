function solve(input) {

    function isNameValid(namesArr, currentName){
        namesArr.forEach(name=>{
            if(name === currentName){
                return true;
            }
        });
        return false;
    }

    function calculateSum(string){
        let sum = 0;
        for(let digit of string){
            sum += Number(digit);
        }
        return sum;
    }

    let patternLetters =/[A-Za-z]/g;
    let patternDist = /\d/g;
    let namesArr = input.shift();
    let names = namesArr.split(', ');
    let namesObj = {};

    for(let name of names){
        namesObj[name] = 0;
    }
    for(let line of input){
        
        let currentName = line.match(patternLetters).join('');
        if(namesObj[currentName]!==undefined){
            let currentDistStr = line.match(patternDist).join('');
            let currentDist = calculateSum(currentDistStr);
            namesObj[currentName] += currentDist;
            
        }
    }
    let objKeys = Object.keys(namesObj);
    objKeys = objKeys.sort((a,b)=>{ 
        return namesObj[b]-namesObj[a]});
    console.log(`1st place: ${objKeys[0]}`);
    console.log(`2nd place: ${objKeys[1]}`);
    console.log(`3rd place: ${objKeys[2]}`);

}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
)
