function solve(input) {
    let seq = input.shift();
    seq = seq.split(' ');
    let turnCounter =0;
    for (let line of input) {
        
        if (line === 'end' ||seq.length ===0) {
            break;
        }
        turnCounter++;
        let [a, b] = line.split(' ');
        if (seq[a] === seq[b]) {
            console.log(`Congrats! You have found matching elements - ${seq[a]}!`);
            if(a>b){
                seq.splice(a,1);
                seq.splice(b,1); 
            } else {
                seq.splice(b,1);
                seq.splice(a,1);
            }
            
            continue;
        }
        if (a< 0 || b<0 || a>seq.length || b>seq.length || a===b){
            console.log('Invalid input! Adding additional elements to the board');
            seq.splice(seq.length/2,0,`-${turnCounter}a`,`-${turnCounter}a`);
            
            continue;
        }
        if (seq[a] !== seq[b]){
            console.log('Try again!');
            
        }

    }
    if(seq.length>0){
        console.log('Sorry you lose :(');
        console.log(seq.join(' '));
    }
    if(seq.length===0){
        console.log(`You have won in ${turnCounter} turns!`);
        
    }


}

solve([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )


