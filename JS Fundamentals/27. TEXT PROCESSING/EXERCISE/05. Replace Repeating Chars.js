function solve(input) {

    let newText = input[0];
    let i = 1;
    while (i < input.length) {


        while (input[i] === input[i - 1]) {
            i++;
        }
        if(i<input.length){
            newText += input[i];
        }
        i++;
    }
    console.log(newText);

}

solve('aaaaabbbbbcdddeeeedssaa')