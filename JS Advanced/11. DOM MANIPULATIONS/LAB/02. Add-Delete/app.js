function addItem() {
    function deleteLine(e){
        let currentLine = e.target;
        let lineToDelete = currentLine.parentElement;
        lineToDelete.remove();
    }
    let input = document.getElementById('newText');
    let list = document.getElementById('items');
    let newLi = document.createElement('li');
    let link = document.createElement('a');
    link.textContent = '[Delete]';
    link.setAttribute('href', '#');
    newLi.textContent = input.value;
    input.value = '';
    newLi.appendChild(link);
    link.addEventListener('click',deleteLine);
    list.appendChild(newLi);
    console.log(list[1]);
}
//<a href="#">[Delete]</a>
