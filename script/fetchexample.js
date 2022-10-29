console.log("starting");
// fetch("./data/customer1.json") // this one exists
fetch("./data/customer99.json") // this one does not!!!

    .then(function(resp) {
        if (!resp.ok) {
            console.log("fetch failed!!!");
            throw resp.statusText;
        }
        return resp;
    })
    .then(function(resp) {
        console.log("processing successfull resp headers, going for json")
        return resp.json();
    })
    .catch(function(e) {
        console.log("oops, processing a problem...");
        if (Math.random() > 0.5) throw new Error("Busted a second time");
        return { name: "recovery object"};
    })
    .then(function(c) {
        console.log("received object: ");
        console.log(c);
        document.write("<p>" + JSON.stringify(c));
    })
    .catch(function(e) { console.log(`failed: ${e}`);});

console.log("kicked off...");
