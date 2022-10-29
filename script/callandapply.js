"use strict";

// function doStuff(...remainder) {
function doStuff(a, b, c) {
    // console.log(`this.name is ${this.name} remainder is ${remainder}`);
    console.log(`this.name is ${this.name} a is ${a}, b is ${b}, c is ${c}`);
}

// doStuff();
const odd = {
    name: "oddball",
    thingy: doStuff
};
odd.thingy();

const tryThis = {
    name: "try this"
};

doStuff.call(tryThis, "arguments", "more");
const argList = ["arguments", "more"];
doStuff.apply(tryThis, argList);
doStuff.call(tryThis, ...argList, "yet more");

function sayHello() {
    let x = 3;
    function hi() {
        console.log("hi");
    }
    hi();
    hi();
    hi();
}

// console.log(x);
// hi(); // nope. In scope within the sayHello method

sayHello();

function giveMeAnObject() {
    let x = Math.random() * 1000;
    let y = {
      xValue: x
    };
    return y;
}

const o1 = giveMeAnObject();
console.log(o1.xValue);
const o2 = giveMeAnObject();
console.log(o2.xValue);

function giveMeAMessageFunction() {
    console.log("inside giveMeAMessageFunction")
    const funct = function(m) {
        console.log("Bonjour " + m);
    }
    return funct;
}

const msg = giveMeAMessageFunction();
console.log("--------------");
console.log(msg);
console.log(typeof msg);
msg("un");
msg("deux");
msg("trois");
msg("quatre");

function makeAdder(a) {
    return function(b) {
        return a + b; // "closure"
    }
}

const addTwo = makeAdder(2);
console.log("addTwo(3) is " + addTwo(3));
console.log("addTwo(7) is " + addTwo(7));

const addFour = makeAdder(4);
console.log("addTwo(3) is " + addTwo(3));
console.log("addTwo(7) is " + addTwo(7));
console.log("addFour(3) is " + addFour(3));
console.log("addFour(7) is " + addFour(7));

function showThisName() {
    console.log(this.name);
}

const x = {
    name: "the x"
};

const showThisNameForX = showThisName.bind(x);
showThisNameForX();
const showThisNameForY = showThisNameForX.bind({name: "surprise"});
showThisNameForY(); // still bound to X

function myBinder(f, t) {
    return function(...params) {
        f.apply(t, params);
    }
}

function greet(n) {
    console.log(`hello ${n}`);
}

function doStuffAgain(f) {
    console.log("about to do something");
    f();
    console.log("did something");
}

// using bind here for "partial application" of arguments
doStuffAgain(greet.bind(undefined, "Albert"));


setTimeout(greet.bind(undefined, "Albert"), 4000);

// while(true)
//     ;
console.log("script falling off the end...")

// using setTimeout, print three messages after random intervals
// Math.random() * 3000 + 1000
// message a
// message b
// message c

