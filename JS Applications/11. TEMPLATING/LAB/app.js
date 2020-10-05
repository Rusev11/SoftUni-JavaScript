(function () {
    function showDetails(e){
        let currentButton = e.target;
        if (currentButton.localName !== 'button'){
            return;
        }
        let details = currentButton.parentElement.querySelector('.details');
        if (details.style.display === 'none'){
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }

    }


    let contactDiv = document.getElementById('contacts');
    Promise.all([
        fetch('http://127.0.0.1:5500/JS%20Applications/11.%20TEMPLATING/LAB/template.hbs').then(res => res.text()),
        fetch('http://127.0.0.1:5500/JS%20Applications/11.%20TEMPLATING/LAB/contacts.json').then(res => res.json())
    ]).then(([template, contacts]) => {
        let templateHTML = Handlebars.compile(template);
        let resultHTML = templateHTML({contacts});
        contactDiv.innerHTML = resultHTML;
    }).then(contactDiv.addEventListener('click',showDetails));

})();