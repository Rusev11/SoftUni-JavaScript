function focus() {
    function selection(e){
        for (let i=0; i<inputArr.length; i++){
            console.log(inputArr[i]);
            let currentParrentNode = inputArr[i].parentNode;
            currentParrentNode.removeAttribute('class');
        }
        let currentDiv = e.target.parentNode;
        currentDiv.setAttribute('class','focused');
    }
    let inputArr = document.getElementsByTagName('input');
    for (let i=0; i<inputArr.length; i++){
        inputArr[i].addEventListener('click',selection);
    }
}