function attachEvents() {
    function deleteContact(e) {
        let currentContact = e.target;
        if (currentContact.localName !== 'button') {
            return;
        }
        fetch(`${url}/${currentContact.id}` , {
            method: 'DELETE'
        })
            .then(() => loadPhonebook());
    }

    function createLi(person, phone, key) {
        let li = document.createElement('li');
        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.setAttribute('id', key);
        delBtn.addEventListener('click', deleteContact);
        li.textContent = `${person}: ${phone} `;
        li.appendChild(delBtn);
        phonebook.appendChild(li);
    }

    function loadPhonebook() {
        phonebook.innerHTML = '';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (let key in data) {
                    let currentPerson = data[key]['person'];
                    let currentPhone = data[key]['phone'];
                    createLi(currentPerson, currentPhone, key);
                }
            })
    }

    function putContact() {
        let person = document.getElementById('person').value;
        let phone = document.getElementById('phone').value;
        console.log(person);
        console.log(phone);

        fetch(url, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ person, phone })
        })
            .then(res => res.json())
            .then(() => loadPhonebook());
    
    }

    let phonebook = document.getElementById('phonebook');
    phonebook.addEventListener('click', deleteContact);
    let url = 'http://localhost:8000/phonebook';
    let createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', putContact);
    let personLast = document.getElementById('person');
    let phoneLast = document.getElementById('phone');
   

attachEvents();