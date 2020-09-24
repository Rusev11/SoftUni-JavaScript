function solve(input) {

    function isDirected(array) {

        for (let i = 0; i < array.length; i++) {

            if (array[i] === 'directedBy') {
                return i;
                // let directorName = [];
                // let counter = 0;
                // for (let j = i; j < array.length; j++) {
                //     directorName[counter] = array[j];
                //     counter++;
            }

            // return directorName.join(' ');
        }
        return false;
    }

    function isOnDate(array) {

        for (let i = 0; i < array.length; i++) {

            if (array[i] === 'onDate') {
                return i;
                // let directorName = [];
                // let counter = 0;
                // for (let j = i; j < array.length; j++) {
                //     directorName[counter] = array[j];
                //     counter++;
            }

            // return directorName.join(' ');
        }
        return false;
    }

    let moviesList = [];

    for (let element of input) {
        let currentCommand = element.split(' ');

        if (currentCommand[0] === 'addMovie') {
            currentCommand.shift();
            moviesList.push({ name: currentCommand.join(' ') });
            continue;
        }

        if (isDirected(currentCommand)) {
            let currentMovieNameArr = [];
            let directorNameArr = [];
            let indexDirected = isDirected(currentCommand);
            for (let i = 0; i < indexDirected; i++) {
                currentMovieNameArr[i] = currentCommand.shift();
            }
            let currentmoveName = currentMovieNameArr.join(' ')
            currentCommand.shift();
            for (let i = 0; 0 < currentCommand.length; i++) {
                directorNameArr[i] = currentCommand.shift();
            }
            let directorName = directorNameArr.join(' ');

            for (let i = 0; i < moviesList.length; i++) {
                if (moviesList[i].name === currentmoveName) {
                    moviesList[i].director = directorName;
                }
            }
        }

        if (isOnDate(currentCommand)) {
            let currentMovieNameArr = [];
            let date = '';
            let indexOnDate = isOnDate(currentCommand);

            for (let i = 0; i < indexOnDate; i++) {
                currentMovieNameArr[i] = currentCommand.shift();
            }
            let currentmoveName = currentMovieNameArr.join(' ')
            currentCommand.shift();
            date = currentCommand.shift();

            for (let i = 0; i < moviesList.length; i++) {
                if (moviesList[i].name === currentmoveName) {
                    moviesList[i].date = date;
                }
            }

        }
    }

    for (let element of moviesList){

        if(element.name && element.date && element.director){
            console.log(JSON.stringify(element));
        }
    }

}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)


