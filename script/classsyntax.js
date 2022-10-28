class Student { // implicitly strict mode "use strict"
    #gpa/* = 0*/; // # symbol indicates "private"
    // before private, we used to have an internal convention for the name
    // such as _gpa... and we hoped that people would have the courtesy to
    // keep their hands off them
    static PASSING_GRADE = 3.2;
    static count = 0;
    constructor(name, gpa, ...courses) {
        // should validate integrity rules here!!
        this.name = name;
        this.#gpa = gpa;
        this.courses = courses;
        Student.PASSING_GRADE++;
        console.log(`there are now ${Student.count} students in existence`);
    }

    toString() {
        return `I'm a student name is ${this.name}, gpa is ${this.#gpa}, courses ${this.courses}`;
    }

    get gpa() { // getter takes zero args, must return something
        return this.#gpa;
    }

    set gpa(g) { // setter must take exactly one argument
        if (g >= 0 && g <= 5.0) {
            this.#gpa = g;
        } else {
            throw new Error("meaningless GPA set");
        }
    }
    // getGpa() {
    //     return this.#gpa;
    // }
    //
    // setGpa(g) {
    //     if (g >= 0 && g <= 5.0) {
    //         this.#gpa = g;
    //     } else {
    //         throw new Error("meaningless GPA set");
    //     }
    // }
}

console.log(Student)
console.log(typeof Student)

const fred = new Student("Fred", 3.2, "Math", "Physics");
console.log(fred);
console.log(fred.toString());
console.log(typeof fred);
console.log(fred instanceof Student);

fred.address = "Over the rainbow";
console.log(fred);
fred.name = "Frederick";
console.log(`fred's name is ${fred.name}`);
// fred.gpa = 99;
// console.log(`fred's gpa is ${fred.gpa}`);
// fred.#gpa = 99;
// console.log(`fred's private #gpa is ${fred.#gpa}`);
// console.log(`fred's private #gpa is ${fred.getGpa()}`);
console.log(`fred's private #gpa is ${fred.gpa}`);
// fred.setGpa(99);
// fred.setGpa(2.8);
fred.gpa = 2.8;
console.log(fred.toString());

// fred = null; // if fred were not "const" this would render the object potentially
// unreachable, and hence eligible for Garbage Collection
