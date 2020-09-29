function solve() {
    let stopId = 'depot';
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let info = document.getElementById(`info`);
    function depart() {
        let url = `https://judgetests.firebaseio.com/schedule/${stopId}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                info.textContent = `Next stop ${data.name}`;
                stopId = data.next;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            });
    }

    function arrive() {
        let url = `https://judgetests.firebaseio.com/schedule/${stopId}.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                info.textContent = `Arriving at ${data.name}`;
                stopId = data.next;
                departBtn.disabled = false;
                arriveBtn.disabled = true;
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();