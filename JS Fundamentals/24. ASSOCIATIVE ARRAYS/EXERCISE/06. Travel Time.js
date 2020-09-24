function solve(input) {
    let destinations = {};

    for (let line of input) {
        let [country, city, costs] = line.split(' > ');
        costs = Number(costs);
        
        if (destinations[country]){
            if(destinations[country][city] <= costs){
                continue;
            } else {
                destinations[country][city] = costs;
            }
        } else {
            destinations[country] = {[city]: costs};
        }
    }
    let countriesSorted = Object.entries(destinations) ;
    countriesSorted.sort((a,b)=>{
        if(a[0].toLowerCase()<b[0].toLowerCase()){
            return -1;
        }
        if(a[0].toLowerCase()>b[0].toLowerCase()){
            return 1;
        }
        if(a[0].toLowerCase()===b[0].toLowerCase()){
            return 0;
        }
    })

    countriesSorted.forEach(country=>{
        let citiesSorted = Object.entries(country[1]);
        citiesSorted.sort((a,b)=> {
            return a[1] - b[1];
        });
        let printLine = country[0] + ' ->';
        citiesSorted.forEach(city=>{
            printLine += ` ${city[0]} -> ${city[1]}`;
            
        });
        console.log(printLine);
        
    });

}


solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)


