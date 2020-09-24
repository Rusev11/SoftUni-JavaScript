function solve(input) {
    let obj = {};
    for (let line of input) {
        let [company, id] = line.split(' -> ');
        if (obj[company]) {
            if (obj[company][id]){
                continue;
            } else {
                obj[company][id] = 0;
            };
        } else {
            obj[company] = {};
            obj[company][id]=0;

        };
    }
    let companiesSorted = Object.keys(obj);
    companiesSorted.sort((a,b)=>{
        aa = a.toLowerCase();
        bb = b.toLowerCase();
        if (aa<bb){
            return -1;
        }
        if (aa<bb){
            return 1;
        }
        if (aa=bb){
            return 0;
        }
    });
    for (let company of companiesSorted){
        console.log(company);
        for(let employee in obj[company]){
            console.log(`-- ${employee}`);
        }
    }
}


solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)


