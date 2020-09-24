function solve(input) {

    function splitInput(input) {
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].split(' ');
        }
    }

    function buy(equipment, item) {
        for (let i = 0; i < equipment.length; i++) {

            if (equipment[i] === item) {
                return;
            }           
        }
        equipment.push(item);
    }

    function trash(equipment, item) {
        for (let i = 0; i < equipment.length; i++) {
            if (equipment[i] === item) {
                equipment.splice(i, 1);
                i--;
            }
        }
    }

    function repair(equipment, item ){
        for(let i=0;i<equipment.length;i++){
            if(equipment[i]===item){
                equipment.push(item);
                equipment.splice(i,1);
                return;
            }
        }
    }

    function upgrade(equipment, item){

        let itemAndUpgrade = item.split('-');
        let upgradedItem = itemAndUpgrade[0];
        let upgrade = itemAndUpgrade[1];
        let stringToBeInserted = `${upgradedItem}:${upgrade}`;
        for (let i=0;i<equipment.length;i++){
            if(equipment[i]===upgradedItem){
                equipment.splice(i+1,0,stringToBeInserted);
                return;
            }
        }
    }

    splitInput(input);
    let equipment = input.shift();
    let printLine = '';
    for (let i = 0; i < input.length; i++) {

        switch (input[i][0]) {

            case 'Buy':
                buy(equipment, input[i][1]);
                break;

            case 'Trash':
                trash(equipment, input[i][1]);
                break;

            case 'Repair':
                repair(equipment, input[i][1]);
                break;

            case 'Upgrade':
                upgrade(equipment, input[i][1]);
                break;
        }
    }

    printLine = equipment.join(' ');
    console.log(printLine);
}




solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)
