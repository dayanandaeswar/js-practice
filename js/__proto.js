//For every object, its __proto__ will be avilalbe
//looks happens like currentscope -> __proto__ -> Object's __proto__
//if you change the __proto__ reference, then above structure will change. Look into __proto.inheritence.js for the same

function Foo(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.getName = function () {
        return this.firstname + " " + this.lastname;
    }

    console.log('this is foo function');
};

var fooObj = new Foo('Dayananda', 'Eswaraiah');

console.log(fooObj);
console.log(fooObj.getName());
console.log(fooObj.__proto__);
console.log(fooObj.__proto__ === Foo.prototype);
console.log(Foo.prototype); 
console.log(fooObj.__proto__.__proto__); //this points to root which <b>Object</b>
console.log(fooObj.__proto__.__proto__.__proto__); //Object __prop__ points to null. JS ensures this 


