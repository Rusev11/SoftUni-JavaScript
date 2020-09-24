function solve(input) {
    
    let pattern = /(\+359)( |-)2\2\d{3}\2\d{4}\b/g;
   // let validPhones = input.match(pattern);
    let validPhones = [];
    let currentNumber;
 //   validPhones = input.match(pattern);
    while ((currentNumber = pattern.exec(input))!==null){
        validPhones.push(currentNumber[0]);
      //  console.log(currentNumber);
    }


    console.log(validPhones.join(', '));
  
}

    solve('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222 ')
