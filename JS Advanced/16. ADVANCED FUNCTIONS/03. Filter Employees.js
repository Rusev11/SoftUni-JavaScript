function solve(input, criteria) {
    function printPerson(obj, counter) {
        console.log(`${counter}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
    }
    let inputArr = JSON.parse(input);
    let [crit, cond] = criteria.split('-');
    if (crit === 'all') {
        let counter = 0;
        inputArr.forEach(x => {
            printPerson(x, counter);
            counter++;
        });
        return;
    }
    let counter = 0;
    for (let element of inputArr) {
        if (element[crit] === cond) {
            printPerson(element, counter);
            counter++;
        }
    }
}


solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'

)
