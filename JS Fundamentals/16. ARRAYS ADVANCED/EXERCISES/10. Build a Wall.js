function solve(crewArray) {

    function isFinished(input){
        for (let i=0;i<input.length; i++){
            if(input[i]<30){
                return false;
            }         
        }
        return true;
    }
    
    function concreteForTheDay(crewArray){
        let concreteForTheDay = 0;
        for(let i=0;i<crewArray.length;i++){
            if(crewArray[i]<30){
                crewArray[i]++;
                concreteForTheDay += 195;
            }
        }
        return concreteForTheDay;
    }

    let concrete =0;
    let concretePerDays = []
    let i=0;
    let printLine ='';
    while (!isFinished(crewArray)){
        concretePerDays[i]=concreteForTheDay(crewArray);
        concrete += concretePerDays[i]
        i++;
    }

    printLine = concretePerDays.join(', ');
    console.log(printLine);
    console.log(`${concrete*1900} pesos`);

}




solve([21, 25, 28]
)
