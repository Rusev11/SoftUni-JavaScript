function solve(numbers, commands){

    let slicedArray = numbers.slice(0,commands[0]);
    slicedArray.splice(0,commands[1]);
    let counter = 0;
    for (let i=0; i<slicedArray.length;i++){
        if(slicedArray[i]===commands[2]){
            counter++;
        }
    }

    console.log(`Number ${commands[2]} occurs ${counter} times.`);
}

 


solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )
