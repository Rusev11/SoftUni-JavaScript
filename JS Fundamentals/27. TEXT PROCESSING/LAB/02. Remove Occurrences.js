function solve(word, input) {
    
    while (input.indexOf(word)>-1){
        input = input.replace(word,'');
    }
    console.log(input);   
}


solve('ice',
    'kicegiciceeb'
    
)


