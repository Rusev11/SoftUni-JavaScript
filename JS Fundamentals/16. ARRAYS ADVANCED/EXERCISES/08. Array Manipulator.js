function solve(numbers, input) {

    function handleInputToArray(input) {

        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].split(' ');
            for (let j = 1; j < input[i].length; j++) {
                input[i][j] = Number(input[i][j]);
            }
        }
    }

    function addFunction(array, index, element) {
        array.splice(index, 0, element);
    }

    function containsFunction(array, element) {

        for (let i = 0; i < array.length; i++) {

            if (element === array[i]) {
                console.log(i);
                return;
            } 
        }
        console.log('-1');
    }

    function addManyFunction(array, inputArray) {
        let inputIndex = inputArray[1];
        for (let i = 2; i < inputArray.length; i++) {

            array.splice(inputIndex, 0, inputArray[i]);
            inputIndex++;
        }

    }

    function removeFunction(array, index) {
        array.splice(index, 1);
    }

    function shiftFunction(array,positions){

        for (let i=0;i<positions;i++){
            array.push(array[0]);
            array.shift();
        }
    }

    function sumPairsFunction(array) {

        for (let i = 0; i < array.length;i++) {
            let a;
            let b;
            let sum = 0;
            if(typeof array[i] === 'number'){
                sum += array[i];
            } 
            if(typeof array[i+1] === 'number'){
                sum += array[i+1];
            }
            
            array.splice(i, 2, sum);
        }
    }

    handleInputToArray(input);
    for (let i = 0; i < input.length; i++) {

        switch (input[i][0]) {

            case 'add':
                addFunction(numbers, input[i][1], input[i][2]);
                break;

            case 'addMany':
                addManyFunction(numbers, input[i]);
                break;

            case 'contains':
                containsFunction(numbers, input[i][1]);
                break;

            case 'remove':
                removeFunction(numbers, input[i][1]);
                break;

            case 'shift':
                shiftFunction(numbers, input[i][1]);
                break;

            case 'sumPairs':
                sumPairsFunction(numbers);
                break;

            case 'print':
                console.log(`[ ${numbers.join(', ')} ]`);
                break;
        }
    }
}




solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']
    

)
