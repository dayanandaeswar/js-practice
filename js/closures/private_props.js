var person = {

    'firstname': 'Dayananda',
    'lastname': 'Eswraiah',
    'getFullName': function () {
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(person.firstname);

//here the problem in firstname is available, i want to make it as private.
//to achieve this, we have Module Pattern in JS

function createPerson(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

    return {
        'getFullName': function () {
            //no need to use this, otherwise scope issue will come
            return firstname + ' ' + lastname;
        },
        'setfirstname': function(name){
            firstname = name;
        },
        'setlastname': function(name){
            lastname = name;
        }
    }
}

var p1 = createPerson('Dayananda', 'Eswaraiah');
console.log(p1.getFullName());
console.log(p1);
p1.setfirstname('Pushpa');
p1.setlastname('Dayananda');
console.log(p1.getFullName());