setTimeout(function() {
        console.log("Message A");
        setTimeout(function() {
                console.log("Message B");
                setTimeout(function() {
                        console.log("Message C");
                    },
                    Math.random() * 3000 + 1000);
            },
            Math.random() * 3000 + 1000);
    },
    Math.random() * 3000 + 1000);