function solve(input) {
    let pattern = /([=\/])(?<name>[A-Z][a-z]{2,})\1/g;
    let currentDest = pattern.exec(input); 
    let destinations = [];
    while (currentDest){
        destinations.push(currentDest.groups.name);
        currentDest = pattern.exec(input); 
    }
    let travelPoint = 0;
    destinations.forEach(dest => travelPoint+= dest.length );
    let destinationsString = destinations.join(', ');
    console.log(`Destinations: ${destinationsString}`)
    console.log(`Travel Points: ${travelPoint}`);
}

solve('ThisIs some InvalidInput'
)


