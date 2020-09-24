function solve(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%<(?<item>[A-Za-z]+)>\|(?<quantity>\d+)\|(?<price>\d+\.?\d)\$/g;
    let patternCustomer = /%(?<name>[A-Z][a-z]+)%/;
    let patternItem = /<(?<item>\w+)>/;
    let patternQuantity = /\|(?<quantity>\d+)\|/;
    let patternPrice = /(?<price>\d+\.?\d*)\$/;
    let sum = 0;
    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }
        let currentCustomer = patternCustomer.exec(line);
        let currentItem = patternItem.exec(line);
        let currentQuantity = patternQuantity.exec(line);
        let currentPrice = patternPrice.exec(line);
        if (currentCustomer !== null && currentItem !== null && currentQuantity !== null && currentPrice !== null) {
            let paidMoney = (Number(currentPrice['groups'].price) * Number(currentQuantity['groups'].quantity)).toFixed(2);
            console.log(`${currentCustomer['groups'].name}: ${currentItem['groups'].item} - ${paidMoney}`);
            sum += Number(paidMoney);
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`);

}

solve([
   ' %InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'
]
)
