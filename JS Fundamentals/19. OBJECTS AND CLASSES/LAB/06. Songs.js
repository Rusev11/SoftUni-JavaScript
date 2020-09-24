function solve(input) {

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    number = input.shift();
    typeForPrint = input.pop();
    let SongsList = [];
    

    for (let element of input){
        let currentElementArray = element.split('_');
        SongsList.push(new Song(currentElementArray[0], currentElementArray[1], currentElementArray[2]));
    }

    if (typeForPrint === 'all'){
        for (let element of SongsList){
            console.log(element.name);
        }
    } else {
        for (let element of SongsList){
            if(element.typeList === typeForPrint){
              console.log(element.name);
            }
        }
    }
}


solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )


