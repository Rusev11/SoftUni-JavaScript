function getInfo() {
    let results = document.getElementById('result');
    let stopName = document.getElementById('stopName');
    let ul = document.getElementById('buses');
    let stopId = document.getElementById('stopId');
    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`

    fetch(url)
        .then(res => res.json())
        .then(data => {
           if (!data.name){
            stopName.textContent ='Error';
            return;    
           }
            stopName.textContent = data.name;
            
            let busesNums = Object.keys(data.buses);
           
            
            busesNums.forEach(item =>{
                let li = document.createElement('li');
                li.textContent = `Bus ${item} arrives in ${data.buses[item]}`;
                ul.appendChild(li);
                stopId.value = '';
            })
        })
    }