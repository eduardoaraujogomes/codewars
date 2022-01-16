/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

const incrementString = string => {
    const last = string.slice(0, string.length - 1);
    if (isNaN(Number(last))) { console.log(Number(last + 1)); };


    /*  const numbers = string.split("").map((el, idx) => {
         if (!(isNaN(Number(el)))) return Number(el);
     }).filter(el => el >= 0).join(""); */




};
console.log(incrementString("foobar002"));
/* console.log(incrementString("foo"));
console.log(incrementString("")); */