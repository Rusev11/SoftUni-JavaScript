function solve(input) {
    let pattern = />>(?<item>\w+)<<(?<price>[0-9]+\.?[0-9]*)!(?<quantity>[0-9]+)\b/;
    let boughtItems = {};
    let sum = 0;
    console.log('Bought furniture:');
    for (let item of input){
        let currentItem = pattern.exec(item);
        if (currentItem){
            console.log(currentItem['groups'].item);
            sum += Number(currentItem['groups'].price)*Number(currentItem['groups'].quantity);
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);


}

solve([ 
'>>Sofa<<312.23!3',
'>>TV<<300!5', 
'>Invalid<<!5', 
'Purchase' ]

)
