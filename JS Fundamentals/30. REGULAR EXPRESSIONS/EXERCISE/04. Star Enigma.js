function solve(input) {

    function dectiption(array){
        let count = 0;
        while (keyArr = patternKey.exec(array)) {
            count++;
        }
        let decryptedStr = ''
        for (let j = 0; j < array.length; j++) {

            decryptedStr += String.fromCharCode(array[j].charCodeAt(0) - count);
        }
        return decryptedStr;
    }

    function sortPlanets(array){
        array = array.sort((a,b)=>{
            if(a.groups.name.toLowerCase()>b.groups.name.toLowerCase()){
                return 1;
            }
            if(a.groups.name.toLowerCase()<b.groups.name.toLowerCase()){
                return -1;
            }
            if(a.groups.name.toLowerCase()===b.groups.name.toLowerCase()){
                return 0;
            }
        })
    }
    let patternKey = /[sStTaArR]/g;
    let n = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 0; i < n; i++) {

        let newStr = dectiption(input[i]);
        let pattern = /@(?<name>[A-Za-z]+).*:(?<population>\d+).*!(?<attack>[AD])!.*->(?<soldier>\d+)/;
        let matches = pattern.exec(newStr);
        if(matches){
            if(matches.groups.attack === 'A'){
                attackedPlanets.push(matches);
            } else {
                destroyedPlanets.push(matches);
            }
        }

    }
    sortPlanets(attackedPlanets);
    sortPlanets(destroyedPlanets);
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet.groups.name}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet.groups.name}`));

}

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
  ]
  
)
