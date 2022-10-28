const nums = [0, 1, 2];
console.log(nums.length);
nums[10] = 10;
console.log(nums.length);
console.log(nums);
// let idx = 0;
// while (idx < nums.length) {
//     console.log("item: " + nums[idx]);
//     console.log(idx++); // take the value of idx as the expression, then increment it
//     console.log("value after increment is " + idx);
// }
for (let idx = 0; idx < nums.length; idx++) {
    console.log("item: " + nums[idx]);
    console.log(idx++); // take the value of idx as the expression, then increment it
    console.log("value after increment is " + idx);
}

const stuff = [];
stuff["name"] = "Fred"; // feels like Python dictionary
stuff["gpa"] = 3.2;     // AWK calls "associative" array
console.log("name is " + stuff["name"]);
console.log("length of stuff array is " + stuff.length);

stuff[0] = 99;
stuff[1] = 98;
stuff[2] = 97;

console.log("--------------------------");

for (const v in stuff) { // for in iterates "keys" not values
    console.log("v is " + v + " and that corresponds to a value of " + stuff[v]);
}

console.log("--------------------------");

for (const v of stuff) { // for of iterates values at NUMERIC subscripts :)
    console.log("v is " + v);
}
