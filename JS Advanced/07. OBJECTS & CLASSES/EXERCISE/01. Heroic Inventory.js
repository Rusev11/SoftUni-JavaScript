function solve(input) {
    let heroes =  [];
    let itemsArr = [];
    for (let line of input){
        let [heroe, level, itemsStr] = line.split (' / ');
        level = Number(level);
        if(itemsStr){
        itemsArr = itemsStr.split(', ');
        }
        if (itemsArr){
        heroes.push({name: heroe, level, items: itemsArr});
        } else {
            heroes.push({name: heroe, level});
        }
    }
    console.log(JSON.stringify(heroes));
}
solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)