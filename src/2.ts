/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  // Заповніть модифікатори доступу
  // name: string;
  // department: string;
  // salary: number;

  // constructor(name: string, department: string, salary: number) {
  //   this.name = name;
  //   this.department = department;
  //   this.salary = salary;
  // }
  constructor(public name: string, private department: string, protected salary: number) { }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

const employee = new Employee("Ivan", "FR", 50000);
const employeeDetails = employee.getEmployeeDetails();
console.log(employeeDetails);





class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 1000);
  }


}

const manager = new Manager("Ivan", "Frontend", 50000);
console.log(manager);

export { };