
// when concatenating with a string, conversion is performed using toString
console.log("Hello " + { name: "Fred"});
console.log("Hello " + { name: "Fred", toString() { return "Im a thing"; }});
// when we simply log a single object, NOT the result of concatenating with a string
// console.log renders the object as if it were an object literal (mostly)
console.log({ name: "Fred", toString() { return "Im a thing"; }});
// this last behavior actually has a alternate way of achieving
console.dir({ name: "Fred", toString() { return "Im a thing"; }});

console.log(["Fred", "Jim"]);
console.log(["Fred", "Jim"].toString());

