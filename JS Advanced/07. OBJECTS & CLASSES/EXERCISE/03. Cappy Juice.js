function solve(input) {
    let juices = {};
    let order = [];
    for (let line of input) {
        let [juice, volume] = line.split(' => ');
        volume = Number(volume);
        if (juices[juice]) {
            juices[juice] += volume;
        } else {
            juices[juice] = volume;
        }
        if(juices[juice]>=1000 && order.indexOf(juice)===-1){
            order.push(juice);
        }
    }
    for (let element of order) {
            console.log(`${element} => ${Math.floor(juices[element] / 1000)}`);
    }
}
solve
    (['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
    
 )
