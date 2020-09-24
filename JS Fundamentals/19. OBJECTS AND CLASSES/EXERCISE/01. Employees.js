function solve(input) {
    class Persons {
        constructor(name){
            this.name = name;
        }
        number = 0;
    }
    
    let peopleList = [];
    for (let i=0;i<input.length;i++){
         let curentPerson = new Persons(input[i]);
        curentPerson.number =curentPerson.name.length;
        peopleList[i]=curentPerson;
    }

    peopleList.forEach ( element => console.log(`Name: ${element.name} -- Personal Number: ${element.number}`));

}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])


