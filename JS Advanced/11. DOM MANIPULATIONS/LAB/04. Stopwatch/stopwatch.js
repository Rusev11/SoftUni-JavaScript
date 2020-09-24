function stopwatch() {
    function counter() {
        console.log('start');
        s1++;
        if (s1 === 10) {
            s10++;
            s1 = 0;
        }
        if (s10 === 6) {
            m1++;
            s10 = 0;
        }
        if (m1 === 10) {
            m1 = 0;
            m10++;
        }
        timer.textContent = `${m10}${m1}:${s10}${s1}`;
    }

    function intervalId() {
        s1 = 0;
        s10 = 0;
        m1 = 0;
        m10 = 0;
        stopBtn.disabled = false;
        startBtn.disabled = true;
        timer.textContent = `${m10}${m1}:${s10}${s1}`;
        myTimer = setInterval(counter, 1000);
        stopBtn.addEventListener('click', stopTime);
    }
    
    function stopTime(){
        clearInterval(myTimer);
        stopBtn.disabled = true;
        startBtn.disabled = false;
      
        timer.textContent = `${m10}${m1}:${s10}${s1}`;
    }

    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let timer = document.getElementById('time');
    let s1 = 0;
    let s10 = 0;
    let m1 = 0;
    let m10 = 0;
    let myTimer;
    startBtn.addEventListener('click', intervalId);
}