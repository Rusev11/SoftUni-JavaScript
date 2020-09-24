function solve(input) {
    function arrayAve(array){
        if(array.length === 0){
            return array.length.toFixed(2);
        }
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum +=array[i];
        }
        return (sum/array.length).toFixed(2);
    }

    let number = Number(input.shift());
    let plants = {};
    for (let i = 0; i < number; i++) {
        let [plantName, rarity] = input.shift().split('<->');
        plants[plantName] = {'rarity':Number(rarity), 'rating': []};
    }
    let line = input.shift();
    while (line !== 'Exhibition') {

        let lineArr = line.split(': ');
        let command = lineArr[0];
        let rating;
        switch (command) {
            case 'Rate':
                [plantName, rating] = lineArr[1].split(' - ');
                rating = Number(rating);
                plants[plantName]['rating'].push(rating);
                break;
            case 'Update':
                [plantName, rarity] = lineArr[1].split(' - ');
                rarity = Number(rarity);
                plants[plantName]['rarity'] = rarity;
                break;

            case 'Reset':
                plantName = lineArr[1];
                plants[plantName]['rating'] = [];
                break;
            default:
                console.log('error');
                break;
        }
        line = input.shift();
    }

    let keys = Object.keys(plants);
    keys.sort((a,b)=>{
        if (plants[a]['rarity']>plants[b]['rarity']){
            return -1;
        }
        if (plants[a]['rarity']<plants[b]['rarity']){
            return 1;
        }
        if (plants[a]['rarity']===plants[b]['rarity']){
            if(arrayAve(plants[a]['rating'])>arrayAve(plants[b]['rating'])){
                return -1;
            }
            if(arrayAve(plants[a]['rating'])<arrayAve(plants[b]['rating'])){
                return 1;
            }
            if(arrayAve(plants[a]['rating'])===arrayAve(plants[b]['rating'])){
                return 0;
            }
        }
    });
    console.log('Plants for the exhibition:');
    for (let plant of keys){
        console.log(`- ${plant}; Rarity: ${plants[plant]['rarity']}; Rating: ${arrayAve(plants[plant]['rating'])}`);
    }

}

solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
  ]
  
  
  
)
