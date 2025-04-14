const readline = require('readline');

function sayHello(Name) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("What is your name? "  , (name) => {
        console.log("Hello " + Name + " " + name);
        rl.close();
    });
}

// Call the function
sayHello("Ender");