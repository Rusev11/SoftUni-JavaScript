function solve(input) {

    let i = input.length-1;
    let currentString = '';
    let extention= '';
    let fileName = '';
    let isExtentionReady = false;
    let extFinished = false;
    while (input[i]!=='\\'){
        if(input[i]==='.' && !extFinished){
            isExtentionReady = true;
            extFinished = true;
            i--;
            continue;
        }
        if (!isExtentionReady){
            extention += input[i];
            i--;
            continue;
        }
        fileName += input[i];
        i--;
    }
    fileName = fileName.split('').reverse().join('');
    extention = extention.split('').reverse().join('');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);

}

solve('C:\\Internal\\training-internal\\Templ.ate.pptx')