function solve() {

    function dropDownFunc(e) {
        let dropDownUl = document.getElementById("dropdown-ul");
        if (!dropDownUl.style.cssText) {
            dropDownUl.setAttribute('style', "display: block;");
            console.log(dropDownUl.style.cssText);
            for (let i = 0; i < dropDownUl.children.length; i++) {
                let currentLi = dropDownUl.getElementsByTagName('li')[i];
                currentLi.addEventListener('click', changeColor);
            }
        } else {
            dropDownUl.setAttribute('style', "none");
            box.removeAttribute('style');
        }

    }

    function changeColor(e) {
        let text = e.target.textContent;
        box.setAttribute('style', `background-color: ${text};`)
        console.log(text);
    }


    let drop = document.getElementById("dropdown");
    drop.addEventListener('click', dropDownFunc);

    let box = document.getElementById('box');
}