"use strict";

function showMe() {
    // console.log("the name is " + this.name);
    // watch out for real values that have "falsy" interpretations
    // console.log("the name is " + (this.name || "unknown"));
    // this one gives LHS unless it's either undefined or null, then RHS
    console.log("the name is " + (this?.name ?? "unknown"));
    console.log(this);
}

console.log(showMe.name);

function weird() {
    console.log("Je m'appelle " + this.name);
}

const fred = {
    name: "Fred",
    doStuff: showMe
};

const jim = {
    name: "Jim",
    doOtherStuff: showMe
}

const sheila = {
    name: "Sheila",
    showAsText: function() {
        console.log(`From Sheila, my name is ${this.name}`);
    },
    doOtherStuff() {
        console.log("running do other stuff");
        showMe();
    }
}

fred.doStuff();
jim.doOtherStuff();
jim.doOtherStuff = weird
jim.doOtherStuff();

const alfie = {
    nom: "Alfie",
    dodgy: showMe,
    nope: 99
}

alfie.dodgy();

// called in strict mode, this===undefined,
// in non-strict (DON'T DO THAT EVER) it's the global object / window
console.log("calling without prefix!!!");
showMe();

sheila.showAsText();
jim.doOtherStuff = sheila.showAsText;
jim.doOtherStuff();

sheila.doOtherStuff();

console.log(alfie.nope);
console.log(typeof alfie.nope);
console.log(typeof alfie.dodgy);
alfie.nope = showMe;
alfie.nope();

