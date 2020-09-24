function solve(words, text) {

    function isThisWord(text, word, index) {
        for (let i = 0; i < word.length; i++) {
            if (text[index] !== '*') {
                return false;
            }
        }
        return true;
    }

    function replaceWord(text, word, index) {
        let secret = '';
        for (let i = 0; i < word.length; i++) {
            secret += '*';
        }
        return text.replace(secret, word);
    }

    let wordsArray = words.split(', ');
    wordsArray.forEach(word => {

        index = text.indexOf('*');
        if (isThisWord(text, word, index)) {
            text = replaceWord(text, word, index);
        }
    });
    console.log(text);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'



)


