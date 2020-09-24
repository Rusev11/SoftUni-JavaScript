function solve(input) {
    let products = {};
    for (let line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        products[product] = price;
    }
    let productNames = Object.keys(products);
    productNames.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        if (a.toLowerCase() === b.toLowerCase()) {
            return 0;
        }
    });
    for (let i = 0; i < productNames.length;) {
        let firstChar = productNames[i][0];
        console.log(firstChar);
        while (productNames[i][0] === firstChar) {
            console.log(`${productNames[i]}: ${products[productNames[i]]}`);
            i++;
        }
    }

}

solve(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)
