function bycycle(name, color) {
    this.name = name;
    this.color = color;
    this.addOns = [];
    this.addAddOns = function (newAddOn) {
        this.addOns.push(newAddOn);
    }
    this.displayBycycle = function () {
        console.log(this.name + ' is cycle with ' + this.color + " with add-on count:" + this.addOns?.length);
    }
}

var heroCycle1 = new bycycle('Hero', 'Black');
var heroCycle2 = new bycycle('Atlas', 'red');
heroCycle1.displayBycycle();
heroCycle1.displayBycycle.call(heroCycle2); //
heroCycle1.displayBycycle.call();// this is mandatory to pass


