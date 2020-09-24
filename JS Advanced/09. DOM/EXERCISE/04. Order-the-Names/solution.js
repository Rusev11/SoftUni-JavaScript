function solve() {
    function handleClick(e) {
        let inputText = document.getElementsByTagName('input')[0];
        let firstChar = inputText.value[0];
        let liPos = firstChar.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        if (liPos >= 0 && liPos < 27) {
            let currentLi = document.getElementsByTagName('li')[liPos];
            if (currentLi.textContent) {
                currentLi.textContent += ', ' + inputText.value;
            } else {
                currentLi.textContent += inputText.value;
            }
        }
        inputText.value = '';
    }
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', handleClick);

}