function solve(input) {
    class City {
        constructor(city, latitude, longitude){
            this.town = city;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    let cities = [];
    

    for (let i=0; i<input.length; i++){
        let currentCity = input[i].split(' | ');
        let cityName = currentCity[0];
        let latitude= (Number(currentCity[1])).toFixed(2);
        let longitude = (Number(currentCity[2])).toFixed(2);
        cities[i] = new City(cityName, latitude, longitude);
    }

    cities.forEach (element => console.log(`{ town: '${element.town}', latitude: '${element.latitude}', longitude: '${element.longitude}' }`));
    //cities.forEach (element => console.log(JSON.stringify(element)));
}   


solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)


