/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case 
*/


const isIsogram = (str) => {

    let lowerLetters = str.toLowerCase().split('');
    let condition = true;
    if (str === '') {
        return condition = true;
    }
    lowerLetters.forEach(element => {
        if (lowerLetters.indexOf(element) != lowerLetters.lastIndexOf(element)) {
            return condition = false;
        }
    });
    return condition;
};

// this Set object lets you store unique values of any type! 
//The size accessor property returns the number of (unique) elements in a Set object.
// function isIsogram(str) {
//     return new Set(str.toUpperCase()).size == str.length;
// }

// is it possible to solve it using regex. ! -- 
//i - ignore case - Makes the whole expression case-insensitive
// \w any word in lower case
// * Matches 0 or more of the preceding token.

// function isIsogram(str) {
//     return !/(\w).*\1/i.test(str);
// }

console.log(isIsogram('mOose'));