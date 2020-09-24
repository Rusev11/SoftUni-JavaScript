function solve(numbers, bomb){

    function handleBombing(array, index, bombPower) {

        array.splice(index > bombPower ? index - bombPower : 0, index >= bombPower ? 2 * bombPower +1 : index+bombPower);

    }

    function calculateArraySum(array){
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum +=array[i];
        }
        return sum;
    }

    let bombNumber= bomb[0];
    let bombPower = bomb[1];

    for(let i=0; i< numbers.length; i++){
        if (numbers[i]===bombNumber){
            handleBombing(numbers,i, bombPower);
            i -=bombPower;
        }
    }

    console.log(calculateArraySum(numbers));
}


solve([1, 2, 2, 4, 2, 2, 2, 9],
[4, 2])
