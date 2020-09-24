function solve(input) {

    let storage = {};

    input.forEach(line => {
        let inputAsArray = line.split(' ');
        let student = inputAsArray.shift();
        let grades = inputAsArray.map(x => Number(x));

        if (storage[student]) {
            let oldGrades = storage[student];
            storage[student] = oldGrades.concat(grades);
        } else {
            storage[student] = grades;
        }
    });

        let sutdentsEntries = Object.entries (storage);
        sutdentsEntries.sort((a,b) =>{
            let averageSumA = averageSum (a[1]);
            let averageSumB = averageSum (b[1]);
            return averageSumA - averageSumB;
        }) 

    sutdentsEntries.forEach(student => console.log(`${student[0]}: ${student[1].join(',')}`));

    function averageSum(input){
        let sum = 0;
        for (let element of input){
            sum += element;
        }

        return sum/input.length;
    }


}


solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']

)


