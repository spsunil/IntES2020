function start(m) {
    return new Promise(function (resolve) {
        console.log("starting pipeline head");
        setTimeout(function () {
            resolve("The message is " + m);
        }, 1000);
        console.log("setTimeout triggered");
    });
}

const shower = function (arg) {
    console.log(arg);
};

start("Bonjour")
    .then(shower);

Promise.race([actualJob, timeoutCounter])