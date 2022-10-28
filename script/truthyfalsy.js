const zero = {};
if (zero) { // true or false???
    console.log("it's truthy!")
} else {
    console.log("its falsy!");
}

// testing equality using == is subject to a bunch of potentially surprising
// automatic conversions.. DON'T DO THAT.

// === tests without performing conversions. USE THIS ONE
// also != not equals => conversions !== No conversions