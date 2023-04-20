
var i;

var print = function () {
    console.log(i);
}

for (i = 0; i < 10; i++) {
    setTimeout(print, 1000);
}

//if you see the input, after 1000ms for each loop, the 10 is printed 10 times

var k;
var printk = function () {
    console.log(k);
}

for (k = 0; k < 10; k++) {
    (function () {
        setTimeout(printk, 1000);
    })();
}

//above also same, now lets change a code little


//the below two approaches solve the issue
var l;

for (l = 0; l < 10; l++) {
    (function () {
        var newObjValue = l;
        setTimeout(function () {
            console.log(newObjValue);
        }, 1000);
    })();
}

var m;

for (m = 0; m < 10; m++) {
    (function (newObjValue) {
        setTimeout(function () {
            console.log(newObjValue);
        }, 1000);
    })(m);
}