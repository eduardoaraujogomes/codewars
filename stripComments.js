// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  const sliced = input.split('\n');
  const finalArray = [];

  function checkFirstWordIsMarker(word) {
    return markers.includes(word.charAt(0));
  }


  sliced.map((arr) => {
    const arrOfArray = arr.split(' ');
    let newArrayWord = '';

    for (let i = 0; i < arrOfArray.length; i++) {
      if (checkFirstWordIsMarker(arrOfArray[i]) || markers.includes(arrOfArray[i])) {
        break;
      } else {
        newArrayWord += arrOfArray[i] + ' ';
      }
    }
    finalArray.push(newArrayWord);
  });

  return finalArray.map((arr) => arr.trim()).join('\n');
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));