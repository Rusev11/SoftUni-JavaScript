function solve(input) {
    let obj = new Map();
    for (let line of input){
        let [brand, model, number] = line.split(' | ');
        number = Number(number);
        if(obj[brand]){
            if (obj[brand][model]){
                obj[brand][model] += number;
            } else {
                obj[brand][model] = number;
            }
        } else {
            obj[brand]={};
            obj[brand][model] = number;
            
        }
    }
    let brands = Object.keys(obj);
    for (let element of brands){
        let models = Object.keys(obj[element]);
        console.log(element);
        for (let currentModel of models){
            console.log(`###${currentModel} -> ${obj[element][currentModel]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']

)
