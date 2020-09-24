function solve(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            
        }
        speak = () => 'Meow';
            
    }

    let cats = [];

    for (let i=0; i < input.length; i++) {
        let catData = input[i].split(' ');
        cats.push(new Cat(catData[0], Number(catData[1])));
    }
    
    for (let i=0;i<cats.length; i++) {
       console.log(`${cats[i].name}, age ${cats[i].age} says ${cats[i].speak()}`);
       
    }
}


solve(['Mellow 2', 'Tom 5'])


