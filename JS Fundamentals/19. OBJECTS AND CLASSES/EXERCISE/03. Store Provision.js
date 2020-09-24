function solve(presentsProductsArr, orderedProductsArr) {
    class Product {
        constructor(name, quantity){
            this.name = name;
            this.quantity = quantity;
        }
    }


    function isPresent(products, currentProduct, currentProductQuantity){

        for (let i=0; i<products.length;i++){
            if(products[i].name === currentProduct){
                products[i].quantity += currentProductQuantity;
                return true;
            }
        }
        return false;
    }

    let products =[];
    
    for (let i=0; i<presentsProductsArr.length; i+=2){
        let currentProduct = presentsProductsArr [i];
        let currentProductQuantity = Number(presentsProductsArr[i+1]);
        products.push(new Product(currentProduct, currentProductQuantity));
    }

    for (let i=0; i<orderedProductsArr.length; i+=2){
        let currentProduct = orderedProductsArr [i];
        let currentProductQuantity = Number(orderedProductsArr[i+1]);
        
        if(!isPresent(products, currentProduct, currentProductQuantity)){
            products.push(new Product(currentProduct, currentProductQuantity));
        }
    }

    for (let element of products){
        console.log(`${element.name} -> ${element.quantity}`);
    }

}   


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    
)


