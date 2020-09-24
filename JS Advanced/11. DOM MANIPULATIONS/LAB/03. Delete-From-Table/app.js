function deleteByEmail() {
    let input = document.getElementsByTagName('input')[0];
    let table = document.getElementsByTagName('tbody')[0];
    let i = 0;
    let currentRow = table.getElementsByTagName('tr')[i];
    let deleted = false;
    let results = document.getElementById('result');
    while (i<table.childElementCount) {
        let email = currentRow.getElementsByTagName('td')[1];
        if (input.value === email.textContent) {
            console.log('yes');
            currentRow.remove();
            deleted = true;
            break;
        }
        currentRow = table.getElementsByTagName('tr')[++i];
    }
    if(deleted){
        results.textContent = 'Deleted';
    } else {
        results.textContent = 'Not found.';
    }


    input.value = '';
}