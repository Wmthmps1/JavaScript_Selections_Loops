// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
j = 0;
while (j <= 100) {
    if (j % 2 === 0) {

    } else {
        console.log(j);
    }
    j++;
}

let k = 0
do {
    if (k % 2 === 0) {

    } else {
        console.log(k);
    }
    k++;
} while (k <= 100);

j = 1;
while (j <= 100) {
    if (j % 3 == 0 && j % 5 == 0) {
        console.log("FizzBuzz");
    } else if (j % 3 == 0) {
        console.log("Fizz");
    } else if (j % 5 == 0) {
        console.log("Buzz");
    }
    j++;
}

j = 1;
do {
    if (j % 3 == 0 && j % 5 == 0) {
        console.log("FizzBuzz");
    } else if (j % 3 == 0) {
        console.log("Fizz");
    } else if (j % 5 == 0) {
        console.log("Buzz");
    }
    j++;
} while (j <= 100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
    if (i == value) {
        console.log("Found value!");
        valueFound = true;
        break;
    } else if (i == n) {
        console.log("Did not find value");
    }
}


console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= n; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log("FizzBuzz");
    } else if (i % fizzDivisor == 0) {
        console.log("Fizz");
    } else if (i % buzzDivisor == 0) {
        console.log("Buzz");
    }
}

/*

Exercise 5: Customized FIZZBUZZ
We already completed the FIZZBUZZ challenge. Now repeat the logic for the FIZZBUZZ challege with values provided in variables.

Start with the following code:
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
Re-implement exercise 2, but use start as the initial value for i, n as the range limit in i <= n, and 
fizzDivisor and buzzDivisor as the dependent values for determining "FIZZ" and "BUZZ" print messages.
*/