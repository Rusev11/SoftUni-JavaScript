class Company {
    constructor() {
        this.department = [];
    }

    addEmployee(name, salary, position, department) {
        if ((name && salary && position && department) || salary < 0) {
            let newEmployee = { name, salary, position, department };
            this.department.push(newEmployee);
            return `New employee is hired. Name: ${name}. Position: ${position}`;
            // console.log(`New employee is hired. Name: ${name}. Position: ${position}`)
        } else {
            throw 'Invalid input!';
        }
    }

    bestDepartment(){
        let array= this.department;
        let maxSalary = array[0].salary;
        let maxSalaryIndex = 0;
        let maxSalaryDepartment = array[0].department;
        let newDepartmentArr = [];
        let sumSalary = 0;
        let aveSalary = 0;
        for (let i=1;i<array.length;i++){
            if (array[i].salary>maxSalary){
                maxSalary = array[i].salary;
                maxSalaryIndex = i;
                maxSalaryDepartment = array[i].department;
            }
        }
        for(let i = 0; i< array.length; i++){
            if (array[i].department === maxSalaryDepartment){
                newDepartmentArr.push(array[i]);
                sumSalary += array[i].salary;
            }
        }
        aveSalary = sumSalary / newDepartmentArr.length;
        newDepartmentArr.sort((a,b)=> b.salary - a.salary);

        let returnLine = '';
        returnLine += `Best Department is: ${maxSalaryDepartment}\n`;
        returnLine += `Average salary: ${aveSalary.toFixed(2)}`;
        newDepartmentArr.forEach(x => returnLine += `\n${x.name} ${x.salary} ${x.position}`);
        return returnLine;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

