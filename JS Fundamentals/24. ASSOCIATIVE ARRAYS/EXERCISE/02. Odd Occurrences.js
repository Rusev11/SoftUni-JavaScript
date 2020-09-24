function solve(input) {
    let words={};
    let wordsArr = input.split(' ');
    wordsArr.forEach(word=>{
        if(words[word.toLowerCase()]){
            words[word.toLowerCase()]++;
        } else{
            words[word.toLowerCase()]=1;
        }
    });

    let arrayToPrint = [];
    let wordsEntries = Object.entries(words);
    wordsEntries.forEach(element=>{
        if (element[1]%2){
            arrayToPrint.push(element[0]);
        }
    });
    let printLine= arrayToPrint.join(' ');
    console.log(printLine);


}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)


