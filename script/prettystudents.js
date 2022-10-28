function ts() {
    return "Student with name " + this.name + " gpa " + this.gpa +
        " and  takes " + this.courses.length + " courses, which are " + this.courses;
}

const fred = {
    name: "Fred",
    gpa: 3.2,
    courses: ["Math", "Physics"],
    toString: ts
    // studentAsText() {
    // toString() {
    //     return "Student with name " + this.name + " gpa " + this.gpa +
    //         " and  takes " + this.courses.length + " courses, which are " + this.courses;
    // },
    // studentAsText: function (/*this*/) { // "this" argument is implicit
    //     return "Student with name " + this.name + " gpa " + this.gpa +
    //         " and  takes " + this.courses.length + " courses, which are " + this.courses;
    // }
};

// ensure your functions are SINGLE PURPOSE (more reusable)
// do NOT print, in here. This does formatting only, the resulting
// text might be printed, or might be sent over a network, or
// might be stored in a database, or might be logged!

// Notice that this behavior is VERY tightly associated with the idea
// of name, gpa, array of courses (i.e. a student)
// function studentAsText(s) { // invoke with verb-object format!!!
//     return "Student with name " + s.name + " gpa " + s.gpa +
//         " and  takes " + s.courses.length + " courses, which are " + s.courses;
// }

// verb - object "procedural" way, make a command to do something to an innocent object
// function operates on fred
// console.log(studentAsText(fred));

// dear fred, please do this operation
// subject - verb ... tend to refer to this as a "method"
// console.log(fred.studentAsText());
console.log("Fred is " + fred);
console.log(fred);
const jim = {
    name: "Jim",
    gpa: 2.2,
    courses: ["Journalism"],
    toString: ts,
};

console.log(jim);
console.log("Jim is " + jim);
