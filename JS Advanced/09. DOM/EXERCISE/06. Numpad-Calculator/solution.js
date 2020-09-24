function solve() {

    function calculation(firstNum, secondNum, sign) {
        if (!(firstNum && secondNum)) {
            return NaN;
        }
        switch (sign) {
            case '+':
                result = firstNum + secondNum;
                break;
            case '-':
                result = firstNum - secondNum;
                break;
            case '*':
                result = firstNum * secondNum;
                break;
            case '/':
                result = firstNum / secondNum
                break;
        }
        return result;
    }

    function inputNumbers(e) {
        let currentButton = e.target;
        let outputLine = document.getElementById('expressionOutput');
        if (currentButton.value === '+' ||
            currentButton.value === '-' ||
            currentButton.value === '*' ||
            currentButton.value === '/') {
            outputLine.textContent += ' ' + currentButton.value + ' ';
        } else {
            if (currentButton.value !== '=') {
                outputLine.textContent += currentButton.value;
            }
        }
        if (currentButton.value === '=') {
            let resultArr = outputLine.textContent.split(' ');
            let firstNum = Number(resultArr[0]);
            let secondNum = Number(resultArr[2]);
            let sign = resultArr[1];
            let result = calculation(firstNum, secondNum, sign);
            let resultOutput = document.getElementById('resultOutput');
            resultOutput.textContent = result;
        }
    }

    function clearResult() {
        let resultOutput = document.getElementById('resultOutput');
        let expressionOutput = document.getElementById('expressionOutput');
        resultOutput.textContent = '';
        expressionOutput.textContent = '';
    }

    let button = document.getElementsByClassName('keys')[0];
    button.addEventListener('click', inputNumbers);
    let clear = document.getElementsByClassName('clear')[0];
    clear.addEventListener('click', clearResult);

}