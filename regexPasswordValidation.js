/* Regex Password Validation 5 kyu
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters. */




/**
 * positive lookahead is used here to ensure that at least one of each character set is available
 * you need to allow every character (.*) before your lookahead character set, 
 * except you want to ensure the expression starts with i.e. a lowercase character.
 * Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
 * The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
 * characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.
 **/

/**
 * 
 * these two lines of comments belong together:
"you need to allow every character (.*) before your lookahead character set,
except you want to ensure the expression starts with i.e. a lowercase character."

When you want to force your password to start with a certain expression, you'll need to replace (.*) with whatever you want as a start.
For lowercase characters it would be: ^(?=[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$

Mind the removed .* before our (?=[a-z]+) lookahead. Starting with a number, it would need to be ^(?=[0-9]+)(?=.*[A-Z]+)(?=.*[a-z]+)[A-Za-z0-9]{6,}$

Regarding the ^ (start of line) and $ (end of line): These force to test the complete input and prevent a match against a partial string. We want a password that solely consists of lower and upper characters as well as numbers, nothing else.
For example, the password #1234Ab would match when we are leaving away the ^ and $, since 1234Ab fulfills our RegEx and we don't care if its the whole line (input) or not.
 */

function validate(password) {
  return /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$)/.test(password);
}

console.log(validate('djI38D55')); // Expected true
console.log(validate('a2.d412')); // Expected false
console.log(validate('JHD5FJ53')); // Expected false
console.log(validate('!fdjn345')); // Expected false
console.log(validate('jfkdfj3j')); // Expected false
console.log(validate('123')); // Expected false
console.log(validate('abc')); // Expected false
console.log(validate('Password123')); // Expected true