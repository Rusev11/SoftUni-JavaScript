function solve(input) {
    let inputLine = input[0];
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let products = [];
    let currentProduct = pattern.exec(inputLine);
    let totalCalories = 0;
        while (currentProduct){
        products.push({
            item: currentProduct.groups.item,
            expDate: currentProduct.groups.expDate,
            calories: currentProduct.groups.calories
        });
        totalCalories += Number(currentProduct.groups.calories);
        currentProduct = pattern.exec(inputLine);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories/2000)} days!`)
    for (let element of products){
        console.log(`Item: ${element['item']}, Best before: ${element['expDate']}, Nutrition: ${element['calories']}`);
    }
}

solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
  ]
)


