function notify(message) {
    function funct() {
        console.log('dada');
        notification.style.display = 'none';
        clearInterval(time);
        
    }
    let time;
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    time = setInterval(funct,2000);
    

}


052762097