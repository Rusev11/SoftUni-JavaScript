function solve(input) {

    function handleWord(text, indexDies, indexSpace){
        //console.log(' aaa');
        let word = '';
        for(let i = indexDies; i<indexSpace;i++){
            word += text[i];
            if(!(text[i]>64&&text[i]<91)||!(text[i]>96&&text[i]<123)){
                return;
            }
        }
        console.log(word);
    }

    let indexDies = input.indexOf('#');
    let indexSpace = input.indexOf(' ', indexDies);
    
    handleWord(input,indexDies, indexSpace);
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");


