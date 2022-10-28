"use strict";
// name = "Fred"; // variable in global scope BAD BAD BAD
// console.log(name);

// console.log(bad2); // var types DON'T USE!! get "hoisted" to top of function
//
// var bad2;

// let name = "Fred";
// console.log(name);
// name = "Frederick"; // varying variables is (generally) discouraged
// console.log(name);

const name = "Fred";
console.log(name);
const newName = "Frederick";
console.log(newName);

// const gpa = "three point two";
// const gpa = 3.2; // IEEE 754 64 bit floating point format, SUBJECT TO ROUNDING ERRORS
let gpa = 3n; // bigint type, n as a suffix

// things have type at runtime, variables are untyped...
console.log(typeof gpa);
gpa = 3.2;
console.log(typeof gpa);

// "student" implies a grouping of related data name (string) gpa (number) studentFred courses ( ??? string )
// "array" is a core JS feature, it's studentFred things in sequence, and can be addressed by
// position in sequence
const studentFred = ["Fred", 3.2, ["Math", "Physics"]]; // array literal -- square brackets
// tuple in other languages, often use an array for this.
console.log(studentFred.length);
console.log(studentFred[0]); // indexes start from zero (but need not be contiguous)
// studentFred.push(3.2); // heterogeneous contents, push appends to the RHS
console.log(studentFred.length);
console.log(studentFred[0]);
console.log(studentFred[1]);
console.log(studentFred[2]);
console.log(studentFred[99]); // undefined implies "value hasn't been set"

let thereIsNoValue = "Oh yes there is";
console.log(thereIsNoValue);
thereIsNoValue = null; // variables (including const) are really "pointers" or "references"
// null is the "pointer to nothing" reference
console.log(thereIsNoValue);

console.log(studentFred[2][1]);
console.log("student " + studentFred[0] + " has grade " + studentFred[1]
    + " and takes " + studentFred[2][0] + " and " + studentFred[2][1]);




