function solve(input) {

    function handleWord(text, indexDies, indexSpace) {
        //console.log(' aaa');
        let word = '';
        if (indexSpace === -1){
            indexSpace = text.length;
        }
        if (indexDies + 1 === indexSpace) {
            return;
        }
        for (let i = indexDies + 1; i < indexSpace; i++) {
            word += text[i];
            if (!(text[i].toUpperCase().charCodeAt(0) > 64 && text[i].toUpperCase().charCodeAt(0) < 91) ) {
                return; 
            }
        }

        console.log(word);
    }

    let indexDies = input.indexOf('#');
    let indexSpace = input.indexOf(' ', indexDies);
    while (indexDies > -1) {
        handleWord(input, indexDies, indexSpace);
        indexDies = input.indexOf('#', indexDies + 1);
        indexSpace = input.indexOf(' ', indexDies);
    }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')