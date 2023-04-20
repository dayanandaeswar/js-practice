
//we will see how to share the common method b/w all similar objects with proto

function Employee(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname

    this.getFullname = function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var emp1 = new Employee('Dayananda', 'Eswaraiah');
var emp2 = new Employee('Pushpa', 'Dayananda');

console.log(emp1);
console.log(emp1.getFullname());
console.log(emp2);
console.log(emp2.getFullname());

//if you see the printed objects, getFullname is available in both the objects

//if we could move this to proto so that, that can become shared
function EmployeeNew(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname
}

//we have moved the object to its parent
EmployeeNew.prototype.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
}

var empnew1 = new EmployeeNew('Dayananda', 'Eswaraiah');
var empnew2 = new EmployeeNew('Pushpa', 'Dayananda');

console.log(empnew1);
console.log(empnew1.getFullname());
console.log(empnew2);
console.log(empnew2.getFullname());
