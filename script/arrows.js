"use strict";

const adder = function(a, b) {
    return a + b;
};

const adder2 = (a, b) => {
    return a + b;
};

const adder3 = (a, b) => a + b ;

const addOne = a => a + 1 ;

const sayHello = () => console.log("Hello") ;


console.log(adder(1, 2));
console.log(adder2(1, 2));
console.log(adder3(1, 2));
console.log(addOne(2));
sayHello();

// "this" in an arrow function takes the "surrounding" value, NOT the invocation prefix

const thing = {
    name: "Fred",
    showIt: function () {
        const that = this;
        // a regular inner function gets a whole new "this"
        function inner() {
            console.log(`name is ${that.name}`);
            // console.log(`name is ${this.name}`);
        }
        // const inner = () => console.log(`name is ${this.name}`);
        inner();
    }
    // showIt: () => console.log(`name is ${this.name}`)
}

thing.showIt();
