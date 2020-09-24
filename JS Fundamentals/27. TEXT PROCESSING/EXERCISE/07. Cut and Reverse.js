function solve(input) {
    let i = parseInt(input.length/2)-1;
    let firstWord = '';
    let secondWord = '';
    for (let j=0; i>=0;i--){
        firstWord += input[i];
        secondWord += input[input.length -1-j];
        j++;
    }
    console.log(firstWord);
    console.log(secondWord);
}

    solve('tluciffiDsIsihTgnizamAoSsIsihT')