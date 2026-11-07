// interface Employee {
//     name: string;
//     baseSalary: number;
// }
// const employee: Employee = {
//     name: "Asif",
//     baseSalary: 22000,
// };
// const employee2: Employee = {
//     name: "Bisal",
//     baseSalary:22000,
// }
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee("Asif", 22000);
const employee2 = new Employee("Bisal", 24000);
console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);
export {};
