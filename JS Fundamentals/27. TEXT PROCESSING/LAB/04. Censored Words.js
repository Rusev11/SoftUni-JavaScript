function solve(sentence, word) {
    function replace(string){
        let replacedString = '';
        for (let char of string){
            replacedString += '*';
        }
        return replacedString;
    }

    let index = sentence.indexOf(word);
    while (index > -1) {
        sentence = sentence.replace(word, replace(word));
        index = sentence.indexOf(word);
    }
    console.log(sentence);

}

solve("A small sentence with some words", "small"
)


