function solve(input) {
    let products = {};
    for (let line of input){
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (products[product]){
            if(products[product]['price']> price){
                products[product]['price']= price;
                products[product]['town']= town;
            }
            continue;
        } else {
            products[product]= {town, price};
        }
    }
    let productsKeys = Object.keys(products);
    productsKeys.forEach(element => console.log(`${element} -> ${products[element].price} (${products[element].town})`));

    
}

solve(
    [   'Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0', 
        'Mexico City | Audi | 1000', 
        'Mexico City | BMW | 99999', 
        'New York City | Mitsubishi | 10000', 
        'New York City | Mitsubishi | 1000', 
        'Mexico City | Audi | 100000', 
        'Washington City | Mercedes | 1000'
        ]

)
