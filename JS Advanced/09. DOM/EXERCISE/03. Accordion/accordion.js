function toggle() {
    let shortText = document.getElementsByClassName('button')[0];
    
    let longText = document.getElementById('extra');
    if (longText.style.display === 'none'){
        longText.style.display = 'block';
        shortText.textContent = 'Less';
    } else {
        longText.style.display = 'none';
        shortText.textContent = 'More';
    }
}