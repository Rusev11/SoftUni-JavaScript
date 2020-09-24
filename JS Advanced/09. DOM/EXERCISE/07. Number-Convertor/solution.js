function solve() {
    function convertNumber(){
        let inputNumber = document.getElementById('input');
        let number = Number(inputNumber.value);
        let newNumber;
        let selectedText = selectMenuTo.options[selectMenuTo.selectedIndex].text;
        switch(selectedText){
            case 'Binary':
                newNumber = number.toString(2);
                break;
                case 'Hexadecimal':
                newNumber = number.toString(16);
                break;
        }
        let result = document.getElementById('result');
        result.value = newNumber;
    }

    let selectMenuTo = document.getElementById('selectMenuTo');
    let binaryOption = selectMenuTo.getElementsByTagName('option')[0];
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    console.log(selectMenuTo.options);
    let hexOption = document.createElement('option');
    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';
    selectMenuTo.options.add(hexOption);
    let convert = document.getElementsByTagName('button')[0];
    convert.addEventListener('click', convertNumber)
   
}