function solve(input) {
   let object = {};
   for (let i=0; i <input.length; i+=2){
       let resource =input [i];
       let quantity = Number(input[i+1]);
       if (object[resource]){
           object[resource] += quantity;
       } else {
           object[resource] = quantity;
       }
   }
   let objectKeys = Object.keys(object);
   for (let element of objectKeys){
       console.log(`${element} -> ${object[element]}`);
   }
}


solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
   
    ]
    
)


