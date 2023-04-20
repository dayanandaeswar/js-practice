
//for every object, it's prototype is created
//all the different object of same function/class will have same prototype
//console.log(fooWithNew.__proto__ === fooDirect.prototype)
//object create with new will have __proto__ where as direction one will have prototype

function foo(){
    console.log('Foo is called');
}

var fooDirect = foo;
fooDirect();
var fooWithNew = new foo();

console.log(fooWithNew.__proto__ === fooDirect.prototype)

fooWithNew.__proto__.name = 'Dayananda';
fooWithNew.name = 'Override';
console.log(fooWithNew.name);
delete fooWithNew.name;
console.log(fooWithNew.name);
