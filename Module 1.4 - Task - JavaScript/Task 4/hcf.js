let num1 = 12;
let num2 = 36;

console.log(HCF(num1, num2));

function HCF(num1, num2) {
    let hcf = 1;

    for (i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0)
            hcf = i;
    }

    return hcf;
}