function solve(input) {
    // let parsedInput = input.join(',');
    // let parsedInputArr = parsedInput.split('},{');
    // let parseInputJSON = parsedInputArr.join(',');
    // console.log(parseInputJSON);
    // let dictionary = JSON.parse(parseInputJSON);
    let dictionary = [];
    
    input.forEach (line=>{
        let currentObject = JSON.parse(line);
        dictionary.push({
            term: Object.keys(currentObject).join('  '),
            definition: Object.values(currentObject).join('  ')});
    })

}


solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"Aааааааааааthe roasted and ground seeds (coffee beans) of a tropical shrub."}'
    ]
)


