let number = 153;
let digitSum = 0
let num_digits = 0
for (let i = number; i > 1; i /= 10) {
    num_digits++;
}
for (let i = number; i > 1; i /= 10) {
    var cubeValue = (Math.pow(parseInt(i % 10), num_digits))
    digitSum += cubeValue;
}

if (number == digitSum) {
    console.log("The given number is Armstrong")
} else {
    console.log("The given number is not Armstrong")
}

// With dynamic input 

const read = require('readline-sync');

let number_a = read.question("Enter a number : ");

let digitSum_a = 0
let num_digits_a = 0
for (let i = number_a; i > 1; i /= 10) {
    num_digits_a++;
}
for (let i = number_a; i > 1; i /= 10) {
    var cubeValue = (Math.pow(parseInt(i % 10), num_digits_a))
    digitSum_a += cubeValue;
}

if (number_a == digitSum_a) {
    console.log("The given number is Armstrong")
} else {
    console.log("The given number is not Armstrong")
}
