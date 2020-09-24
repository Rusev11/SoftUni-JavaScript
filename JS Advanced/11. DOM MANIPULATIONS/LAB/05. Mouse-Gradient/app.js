function attachGradientEvents() {
    function getGradient(e){
        console.log(e.clientX);
        let percentage = Math.floor(((e.clientX-10)/300)*100);
        console.log(percentage);
        let result = document.getElementById('result');
        result.textContent=percentage+'%';
    }

   let gradient = document.getElementById('gradient');
   gradient.addEventListener('click',getGradient);
}