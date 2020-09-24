function solve(input) {
    
    function generateSymbol(number){
        let symbol = '';
        while (number >0){
            symbol += '_';
            number--;
        }
        return symbol;
    }

    function replaceSymbol (text, word, index){
        let textArr = text.split('');
        for(let i=0;i<word.length; i++){
            textArr[index]=word[i];
            index++;
        }
        return textArr.join('');
    }

    function findIndex(text, symbol) {
        let index = text.indexOf(symbol);
        while (index > -1){
            if (text[index+symbol.length]!='_'){
                return index;
            } else {
                while (text[index]==='_'){
                    index++;
                }
            }
            index = text.indexOf(symbol,index);
        }
    }
    
    let text = input[0];
    let wordsArr = input[1];

    for (let word of wordsArr){
        let currentSymbol = generateSymbol(word.length);
        let index = findIndex(text, currentSymbol);
        text = replaceSymbol(text, word, index);  
    }
    console.log(text); 
}

    solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)