/*
Digita root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If the value has more than one digit, continue reducing in this way until a single-digit number is prodocued. The input will be a non-negative integer.

Exampl
16 --> 1+6 = 7
942 --> 1 + 3 +2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2
*/
const digital_root = n => {
    let sumOfNumbers = n;

    while (sumOfNumbers > 9) {
        sumOfNumbers = sumOfNumbers.toString().split('').map(n => Number(n)).reduce((acc, num) => acc + num);
    }
    return sumOfNumbers;
};

// using mathematical formula 
// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }


console.log(digital_root(493193));