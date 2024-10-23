// Hard coding
// take 3 numbers

let numbers = [25, 36, 15];

// declare total variable

let total = 0

// find total using loop 

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

// calculate average 

let average = total/numbers.length;

// Print answer

console.log("Average of these numbers is : ", average.toFixed(3));

// ---------------------------------------------------------------------

//  CODE WITH DYNAMIC VALUE
// using readline-sync  module

var read = require('readline-sync');

let numbers1 = new Array(3);

// select user input
 
for (let j = 0; j < 3; j++) {
    
    numbers1[j] = parseInt(read.question(`Enter number ${j+1} : `));  
}

// declare total variable

let total1 = 0

// find total using loop 

for (let i = 0; i < numbers1.length; i++) {
    total1 += numbers1[i];
}

// calculate average 

let average1 = total1/numbers1.length;

// Print answer

console.log("Average of these numbers is : ", average1.toFixed(3));