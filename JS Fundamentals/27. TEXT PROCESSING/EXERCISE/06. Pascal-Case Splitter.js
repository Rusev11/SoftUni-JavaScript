function solve(input) {
    let words = [];
    words[0] = '';
    let counter = 0;
    
    words[counter] += input[0];
    for (let i = 1; i<input.length; i++){
        if(input[i].charCodeAt(0) > 64 && input[i].charCodeAt(0) < 90){
            counter++;
            words[counter] = '';
        }
        words[counter] += input[i];
    }
    console.log((words.join(', ')));
}

    solve('SplitMeIfYouCanHaHaYouCantOrYouCan')