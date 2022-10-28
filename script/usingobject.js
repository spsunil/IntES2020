"use strict";

const prot = {
    address: "Unknown address"
};

// usually wrap this in a function that will fully intialize the object
const oneOfThem = Object.create(prot);
console.log(oneOfThem);
console.log(oneOfThem.address);
const anotherOfThem = Object.create(prot);
console.log(anotherOfThem);
anotherOfThem.address = "Down the lane";
console.log(anotherOfThem);
console.log(anotherOfThem.address);

// look at the Object API, we can define rules for members, such as "read only"
// we can also seal, or freeze objects (and other useful stuff)

// Object.seal(anotherOfThem);
Object.freeze(anotherOfThem);
// anotherOfThem.newField = "newstuff";
anotherOfThem.address = "changed";
console.log(anotherOfThem);

