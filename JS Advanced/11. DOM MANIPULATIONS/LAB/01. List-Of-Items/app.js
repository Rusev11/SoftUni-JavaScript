function addItem() {
    function deleteLine(e){
        let currentLine = e.target;
        let lineToDelete = currentLine.parentElement;
        lineToDelete.remove();
    }
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let newLi = document.createElement('li');
    let link = document.createElement('a');
    link.textContent = '                    [Delete]';
    link.setAttribute('style', 'text-align-last: right');
    newLi.textContent = input.value;
    input.value = '';
    newLi.appendChild(link);
    link.addEventListener('click',deleteLine);
    list.appendChild(newLi);
    
}