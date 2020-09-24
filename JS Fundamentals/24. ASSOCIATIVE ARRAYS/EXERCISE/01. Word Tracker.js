function solve(input) {
    let wordsToFind = {};
    let wordsToFindArr = input.shift().split(' ');
    wordsToFindArr.forEach(element => wordsToFind[element] = 0);

    input.forEach(line => {
        if (typeof wordsToFind[line]=== 'number') {
            wordsToFind[line]++;
        }
    });

    let wordsKeys = Object.keys(wordsToFind);
    wordsKeys.sort((a,b)=>wordsToFind[b] - wordsToFind[a]);
    wordsKeys.forEach(key=>{
        console.log(`${key} - ${wordsToFind[key]}`);
    })


}


solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    


)


