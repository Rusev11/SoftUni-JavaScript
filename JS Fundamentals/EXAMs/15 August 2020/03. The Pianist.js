function solve(input) {
    function findIndex(array, piece) {
       
        let i = 0;
        while (array[i]['piece'] !== piece) {
            i++;
        }
        return i;
    }

    


    let number = Number(input.shift());
    let pieces = [];
    for (let i = 0; i < number; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces.push({ piece, composer, key });
    }
    let index;
    let currentLine = input.shift().split('|');
    let command = currentLine[0];
    let piecesKeys = [];
    while (command !== 'Stop') {
        switch (command) {
            case 'Add':
                [piece, composer, key] = [currentLine[1], currentLine[2], currentLine[3]];
                pieces.forEach(piece => piecesKeys.push(piece['piece']));
                if (piecesKeys.indexOf(piece) > -1) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    pieces.push({ piece, composer, key });
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':
                piece = currentLine[1];
                pieces.forEach(piece => piecesKeys.push(piece['piece']));
                if ((index = piecesKeys.indexOf(piece)) > -1) {
                    pieces.splice(index, 1);
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                piece = currentLine[1];
                pieces.forEach(piece => piecesKeys.push(piece['piece']));
                if ((index = piecesKeys.indexOf(piece)) > -1) {
                    pieces[index]['key'] = currentLine[2];
                    console.log(`Changed the key of ${piece} to ${currentLine[2]}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }    
                break;
        }
        currentLine = input.shift().split('|');
        command = currentLine[0];
        piecesKeys = [];
    }
    pieces.sort((a, b) => {
        if (a['piece'].toLowerCase() < b['piece'].toLowerCase()) {
            return -1;
        }
        if (a['piece'].toLowerCase() > b['piece'].toLowerCase()) {
            return 1;
        }
        if (a['piece'].toLowerCase() === b['piece'].toLowerCase()) {
            if (a['composer'].toLowerCase() < b['composer'].toLowerCase()){
                return -1;
            }
            if (a['composer'].toLowerCase() > b['composer'].toLowerCase()){
                return 1;
            }
            if (a['composer'].toLowerCase() === b['composer'].toLowerCase()){
                return 0;
            }
        }
    });
    pieces.forEach(element=>console.log(`${element.piece} -> Composer: ${element.composer}, Key: ${element.key}`));
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)


