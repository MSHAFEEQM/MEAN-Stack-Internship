// Hard coding
// initialize three variables with values 

let num1 = 22;
let num2 = 21;
let num3 = 20;

// logical comparison

if(num1 > num2){
    if (num1 > num3){
            console.log("Largest number is : ", num1);
    }else{
        console.log("Largest number is : ", num3);
    }
}else if(num2 > num3){
    console.log("Largest number is : ", num2);
}else{
    console.log("Largest number is : ", num3);
}


// -------------------------------------------------------------------
// Code with dynamic values 

const read = require('readline-sync')

// recieve values from user

let num_1 = read.question("Enter number 1 : ");
let num_2 = read.question("Enter number 2 : ");
let num_3 = read.question("Enter number 3 : ");

// logical comparison

if(num_1 > num_2){
    if (num_1 > num_3){
            console.log("Largest number is : ", num_1);
    }else{
        console.log("Largest number is : ", num_3);
    }
}else if(num_2 > num_3){
    console.log("Largest number is : ", num_2);
}else{
    console.log("Largest number is : ", num_3);
}
