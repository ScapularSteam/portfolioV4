// This file is used so I can make random s*** in Javascript as I am awful at it and want to improve :)
// Also I know this file looks very random, that's because I'm learning the equivant expressions for JS from Python


console.log("Testing, Testing, 123");

// The keyword let is used to initialise a variable

// Define variables
let message = "Hello world!";
let user_name = "David";

alert(message)
console.log(message)
console.log(message.length)

// Note: = sets a value, == evaluates "1" and one as true while === does not, === in js functions like == in python

// Messing with if statements
if (message.length > 10) {
    console.log("message has greater than 10 characters");
} else {
    console.log("message has less than 10 characters");
};

// Logic operators: && = and, || = or, ! = not

// Testing string functions
messageLower = message.toLowerCase();
console.log(messageLower)

// Messing with iteration

for (let i = 0; i < 5; i++) { // i++ is short hand notation for increment by 1
    console.log(i+1);
};

for (let i = 0; i < message.length; i++) {
    console.log(message.charAt(i))
}