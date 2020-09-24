function solve(input) {

    let storage = {};
    
    input.forEach(line => {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (storage[item]){

            // let oldQuantity = storage.quantity;
            storage [item] += quantity;
        } else {
            storage[item] = quantity;
        }
    });

    // for (let item in storage){
    //     console.log(`${item} -> ${storage[item]}`);
    // }
    
    // Object.keys(storage).forEach( key => {
    //     console.log(`${key} -> ${storage[key]}`);
    // })
    
    // for (let key of Object.keys(storage)){
    //     console.log(`${key} -> ${storage[key]}`);
    // }

    for (let kvp of Object.entries(storage)){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
        
    }
   

}


solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)


