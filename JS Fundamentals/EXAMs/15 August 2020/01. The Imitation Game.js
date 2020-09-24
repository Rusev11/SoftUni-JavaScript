function solve(input) {
    let word = input.shift();
    for (let line of input){
        if (line === 'Decode'){
            console.log(`The decrypted message is: ${word}`);
        }
        let lineArr = line.split('|');
        switch(lineArr[0]){
            case 'ChangeAll':
                while (word.indexOf(lineArr[1])>-1){
                word = word.replace(lineArr[1],lineArr[2]);
                }
                break;
            case 'Insert':
                let wordStart = word.slice(0,lineArr[1]);
                let wordEnd = word.slice(lineArr[1]);
                word = [wordStart, lineArr[2], wordEnd].join('');
                break;
            case 'Move':
                let wordArr = word.split('');
                for (let i=0;i<lineArr[1];i++){
                    let char = wordArr.shift();
                    wordArr.push(char);
                }
                word = wordArr.join('');
                break;
        }

    }

}


solve([ 
'zzHe',
'ChangeAll|z|l',
'Insert|2|o', 
'Move|3', 
'Decode' ]
)


