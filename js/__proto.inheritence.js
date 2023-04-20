

//Here we set methods to protype so that they are avaiable to all objects
function Employee(firstname, lastname, dept) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dept = dept;
}

function Manager(managerLevel, maxReportees) {
    this.managerLevel = managerLevel;
    this.maxReportees = maxReportees;

}

Employee.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
}
Employee.prototype.getDept = function () {
    return this.dept;
}

Manager.prototype.getMgrLevel = function(){
    return this.managerLevel;
}
Manager.prototype.getMaxReportees = function(){
    return this.maxReportees;
}


var empObj1 = new Employee('Dayananda', 'Eswaraiah', 'TA');
var mgrObj1 = new Manager('TA', 10);

console.log(empObj1.__proto__);
console.log(mgrObj1.__proto__);
console.log(mgrObj1.getMgrLevel());
//console.log(mgrObj1.getFullname()); //this will throw an error
console.log(mgrObj1.__proto__.__proto__ === Object.prototype);
console.log(Manager.prototype.__proto__ === Object.prototype);

mgrObj1.__proto__.__proto__ = Employee.prototype
console.log(Manager.prototype.__proto__ === Object.prototype);
console.log(Manager.prototype.__proto__.__proto__ === Object.prototype);
console.log(Manager.prototype.__proto__ === Employee.prototype);
console.log(mgrObj1);
console.log(mgrObj1.getFullname());



