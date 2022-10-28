const theFallback = {
    toString() {
        return "Something with name of " + this.name;
    },
    address: "There is no known address"
};
console.log(theFallback)

// const fred = new Object(theFallback); // duplicates the contents
// console.log(fred);
// fred.name = "Fred";
//
// fred.gpa = 3.5;
// fred.courses = ["Math", "Physics"];
// console.log(fred);

// function Student(name, gpa, courses) {
function Student(name, gpa, ...courses) { // "constructor function"
    // probably should do some validation
    this.name = name;
    this.gpa = gpa;
    this.courses = courses;
}

Student.prototype = theFallback;

// new makes an empty object, and then passes that object as "this" to the function
// with the name that follows (i.e. Student in this case)
// that function gets the arguments, and then performs the initialization
// const fred = new Student("Fred", 3.2, ["Math", "Physics"]); // matches "courses"
const fred = new Student("Fred", 3.2, "Math", "Physics"); // matches ...courses
console.log(fred);
console.log(fred.toString());

console.log(fred.address);
