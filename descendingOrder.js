/* 
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 
*/
// First convert the number in a String so you can use the arrays methods inside of it. After that, you can use split to put all values inside a array.
// sort for sorting the numbers  and joint and - 0 to join all the array and transform in a number again.

const descendingOrder = n => n.toString().split('').sort((a, b) => b - a).join('') - 0;

//parseInt will transform the result in a number, String will transform in a string
// function descendingOrder(n) {
//     return parseInt(String(n).split('').sort().reverse().join(''));
// }

console.log(descendingOrder(1201));