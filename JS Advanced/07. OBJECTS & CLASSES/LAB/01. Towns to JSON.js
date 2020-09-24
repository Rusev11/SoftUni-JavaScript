function solve(input) {
    class city {
        constructor (town, lat, long){
        this.Town = town;
        this.Latitude = lat;
        this.Longitude = long;
        }
    }

    input.shift();
    let cities = [];
    for (let i=0; i< input.length; i++) {
        let [fake, currentTown, currentLat, currentLong ] = input[i].split('|');
        currentTown =  currentTown.trim();
        currentLat = Number(currentLat).toFixed(2);
        currentLong = Number(currentLong).toFixed(2);
        let currentObj = new city(currentTown, currentLat, currentLong);
        cities.push(JSON.stringify(currentObj));
    }
    console.log(cities);
}

solve(
    ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
    
  
)
