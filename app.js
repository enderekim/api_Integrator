const readline = require('readline');

function sayHello() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("What is your name? ", (name) => {
        console.log("Hello " + name);
        rl.close();
    });
}

// Call the function
sayHello();