function attachEvents() {
    function findLocCode() {
        let url = 'https://judgetests.firebaseio.com/locations.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    if (item.name === location.value) {
                        localCode = item.code;
                        getConditions();
                    }
                });
            });

    }

    function getConditions() {
        let urlCurrentConditions = `https://judgetests.firebaseio.com/forecast/today/${localCode}.json`

        fetch(urlCurrentConditions)
            .then(res => res.json())
            .then(data => {
                console.log(data.forecast);
                let forRemove = document.querySelector('.forecast');
                if (forRemove !== null) {
                    forRemove.remove();
                }
                let forecast = document.getElementById('forecast');
                let current = document.getElementById('current');
                let upcoming = document.getElementById('upcoming');
                let currentDiv = document.createElement('div');
                let currentForecast = document.createElement('div');
                let condSpan = document.createElement('span');
                let locationSpan = document.createElement('span');
                let temperatureSpan = document.createElement('span');
                let sunnySpan = document.createElement('span');
                let condSymbolSpan = document.createElement('span');

                forecast.setAttribute('style', 'display: block');
                current.appendChild(currentForecast);
                currentForecast.setAttribute('class', 'forecast');
                currentForecast.appendChild(condSymbolSpan);
                condSymbolSpan.setAttribute('class', 'condition symbol');
                condSymbolSpan.textContent = conditionSymbol[data.forecast.condition];
                currentForecast.appendChild(condSpan);
                condSpan.setAttribute('class', 'condition');
                condSpan.appendChild(locationSpan);
                condSpan.appendChild(temperatureSpan);
                condSpan.appendChild(sunnySpan);
                locationSpan.setAttribute('class', 'forecast-data');
                temperatureSpan.setAttribute('class', 'forecast-data');
                sunnySpan.setAttribute('class', 'forecast-data');
                locationSpan.textContent = data.name;
                temperatureSpan.textContent = `${data.forecast.low}°/${data.forecast.high}`;
                sunnySpan.textContent = `${data.forecast.condition}`;






            });
    }

    let location = document.getElementById('location');

    let submit = document.getElementById('submit');
    submit.addEventListener('click', findLocCode)
    let localCode;
    let conditionSymbol = {
        "Sunny": "☀",
        "Partly sunny": "⛅",
        "Overcast": "☁",
        "Rain": "☂",
        "Degrees": "°"
    };
}

attachEvents();