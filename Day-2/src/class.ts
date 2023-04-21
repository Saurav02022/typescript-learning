class Employee {
  empCode: number;
  empName: string;

  constructor(empcode: number, empName: string) {
    this.empCode = empcode;
    this.empName = empName;
  }
}

class EmployeePhoneNumber extends Employee {
  phoneNumber: number;
  constructor(empcode: number, empName: string, phoneNumber: number) {
    super(empcode, empName);
    this.phoneNumber = phoneNumber;
  }
}

let emp = new Employee(100, "Steve");
let emp1 = new EmployeePhoneNumber(2, "Banti", 9572365331);
