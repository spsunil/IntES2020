const theFallback = {
    toString() {
        return "Something with name of " + this.name;
    },
    address: "There is no known address"
};
// console.log(theFallback)

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
    this.name = name; // these are things each *instance*
    this.gpa = gpa;
    this.courses = courses;
    Student.count++;
    console.log("student count is now " + Student.count);
}

// functions (e.g. Student) are objects!!!! they can have fields
Student.prototype = theFallback;
// equivalent to a "static" element in regular OO
// "concept wide" there's just one of this...
Student.passingGrade = 3.5;
Student.count = 0;

// new makes an empty object, and then passes that object as "this" to the function
// with the name that follows (i.e. Student in this case)
// that function gets the arguments, and then performs the initialization
// const fred = new Student("Fred", 3.2, ["Math", "Physics"]); // matches "courses"
const fred = new Student("Fred", 3.2, "Math", "Physics"); // matches ...courses
console.log(fred);
console.log(fred.toString());

console.log(fred.address);
fred.address = "Over the rainbow";
console.log(fred.address);
console.log(fred.toString());
console.log(fred);
console.log(theFallback)

const george = new Student("George", 2.2, ["Art"]);
console.log(george);
console.log(george.address);
console.log(fred);
console.log(fred.address);
