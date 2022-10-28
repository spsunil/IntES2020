const fredAgain = {}; // key value pairs, dictionary or a map
fredAgain.name = "Fred"; // equally using subscript access as below and in the loop
// fredAgain["name"] = "Fred";
fredAgain["first name"] = "Frederick"; // this kind of indexing is not restricted to string types!!!
fredAgain.gpa = 3.2;
fredAgain.courses = ["Math", "Physics"];

for (const key in fredAgain) {
    console.log("key = " + key + " has value = " + fredAgain[key]);
}

// for (const value of fredAgain) { // nope, not for objects, just for "iterable"
//     console.log("value = " + value);
// }

const jim = {
    name: "Jim",
    gpa: 2.6,
    courses: ["Journalism"],
};

function studentAsText(s) {
    // return "Student with name " + s.name + " gpa " + s.gpa + " and courses " + s.courses[0];
    return "Student with name " + s.name + " gpa " + s.gpa +
        " and  takes " + s.courses.length + " courses, which are " + s.courses;
}

console.log("Jim is " + jim);
console.log(jim);
console.dir(jim);

console.log(studentAsText(jim));

// const badThing = {
//     nom: "Albert",
//     gpa: 2.2,
// };

// console.log(studentAsText(badThing));// this fails, no name -> undefined, but undefine[0] explodes

// "build an object from some kind of template" is way better for things
// we have many of than using repeated literals (not least, you might mis-type
// one of the field names!

// function makeAStudent(n, g, c) {

// "rest operator" picks up the remaining args, literally the "rest" of the arguments
// and puts them in an array for you!
function makeAStudent(n, g, ...c) {
    // validations first, usually a good idea :)
    if (typeof n !== "string") { // Houston! we have a problem
        throw new Error("Missing name for student");
    }
    // && AND, || OR -- "short circuiting"
    if (typeof g !== "number" && g >= 0 && g <= 5.0) {
        throw new Error("gpa must be a number");
        // throw new Error();
    }
    // array is an object!!! but it's instanceof Array
    if (typeof c !== "object" || !(c instanceof Array)) {
        throw new Error("need an array of courses");
    }
    return {
        name: n,
        gpa: g,
        courses: c // so far we're hoping that c is actually an array of string course names
    };
}

// const fred = makeAStudent("Fred", 3.2, ["Math", "Physics"]); // missing actual params -> undefined
// const fred3 = makeAStudent("Fred", 3.2, []); // missing actual params -> undefined

// makes array of math/physics because this version has "variable length arg list"
const fred = makeAStudent("Fred", 3.2, "Math", "Physics");
// creates an empty array for the courses...
const fred3 = makeAStudent("Fred", 3.2);

console.log(studentAsText(fred));
console.log(studentAsText(fred3));

// const fails = makeAStudent("Jim", "3.2");
// const fails = makeAStudent("Jim");