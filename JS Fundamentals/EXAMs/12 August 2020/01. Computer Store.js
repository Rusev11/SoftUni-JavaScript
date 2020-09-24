function solve(input) {
    let sum = 0;
    let prices = []
    for (let line of input) {
        if(line === 'special' || line === 'regular'){
            if(sum === 0){
                console.log('Invalid order!');
                return;
            }
            console.log('Congratulations you\'ve just bought a new computer!');
            console.log((`Price without taxes: ${sum.toFixed(2)}$`));
            console.log((`Taxes: ${(0.2*sum).toFixed(2)}$`));
            console.log('-----------');
            if(line==='special'){
                console.log(`Total price: ${(1.2*sum*0.9).toFixed(2)}$`);
                return;
            }
            if(line==='regular'){
                console.log(`Total price: ${((1.2*sum).toFixed(2))}$`);
                return;
            }
            
        }
        let price = Number(line);
        if (price <= 0) {
            console.log('Invalid price!');
            continue;
        }
        sum += price;
        

    }
}

solve(['1023','15','-20','-5.50','450',
    '20',
    '17.66',
    '19.30',
    'regular']
    
)


