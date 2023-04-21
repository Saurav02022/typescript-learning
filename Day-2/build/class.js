class Employee {
    empCode;
    empName;
    constructor(empcode, empName) {
        this.empCode = empcode;
        this.empName = empName;
    }
}
class EmployeePhoneNumber extends Employee {
    phoneNumber;
    constructor(empcode, empName, phoneNumber) {
        super(empcode, empName);
        this.phoneNumber = phoneNumber;
    }
}
let emp = new Employee(100, "Steve");
let emp1 = new EmployeePhoneNumber(2, "Banti", 9572365331);
