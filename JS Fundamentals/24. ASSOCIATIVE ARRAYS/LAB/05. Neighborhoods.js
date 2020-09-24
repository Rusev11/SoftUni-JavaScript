function solve(input) {
    let neighborhoods={}
    let neighborhoodsArr = input.shift().split(', ');

    neighborhoodsArr.forEach(element => neighborhoods[element]=[]);

    input.forEach(line =>{
        let currentPerson = line.split(' - ');
        if(neighborhoods[currentPerson[0]]){
            neighborhoods[currentPerson[0]].push(currentPerson[1]);
        }
    });

    let neighborhoodsKeys = Object.keys(neighborhoods);

    neighborhoodsKeys.sort((a,b)=>{
        return neighborhoods[b].length - neighborhoods[a].length;
    });

    neighborhoodsKeys.forEach( element =>{
        console.log(`${element}: ${neighborhoods[element].length}`);
        neighborhoods[element].forEach(person=>{
            console.log(`--${person}`);
        });
    });
    
}


solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']


)


