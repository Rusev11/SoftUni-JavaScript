function solve(input) {

    let words = {};

    input.forEach(word =>{
        if (words[word]){
            words[word]++;
        } else {
            words[word]=1;
        }
    });

    // let wordsArray = Object.entries(words);

    // wordsArray.sort((a,b)=>b[1] - a[1]);


    // wordsArray.forEach(word =>{
    //     console.log(`${word[0]} -> ${word[1]} times`);
    // });
    
    let wordsArray = Object.keys(words);
    wordsArray.sort((a,b)=>{
        return words[b]-words[a];
    });

    // wordsArray.forEach(word =>{
    //     console.log(`${word} -> ${words[word]} times`);
    // });

    for (let word of wordsArray){
        console.log(`${word} -> ${words[word]} times`);
    };

}


solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]

)


