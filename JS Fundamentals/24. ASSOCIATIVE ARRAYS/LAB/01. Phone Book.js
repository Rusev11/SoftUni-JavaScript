function solve(input) {
    let contact = {};
    input.forEach(line => {
        let [name, phone] = line.split(' ');
        contact[name] = phone;
    });

    Object.keys(contact).forEach( key =>{
        console.log(`${key} -> ${contact.key}`);
    })

}


solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']

)


