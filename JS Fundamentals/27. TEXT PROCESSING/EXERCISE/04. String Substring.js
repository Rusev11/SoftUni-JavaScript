function solve(word, text) {

    function stringToLowerCase(text) {
        let newText = '';
        for (let ch of text){
            newText += ch.toLowerCase();
        }
        return newText;
    }

    word = word.toLowerCase();
    text = stringToLowerCase(text);
    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

solve('JAVAscript', 'JavaScript is the best programming language')