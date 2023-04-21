function isPalindrome(word) {
  let array = [];
  for (letter of word) {
    array.push(letter);
  }

  if (array[0] === array[array.length - 1]) {
    return true;
  } else {
    return false;
  }
}

/*
  Add your pseudocode here
  I need to check if the first and last letters are the same
  and return true if they are and return false if they are not
  I could interate over the string

  const string = "bob";
const string2 = "mary";

const loop = function (string) {
  let array = [];
  console.log(string.length);
  for (letter of string) {
    console.log(letter);
    array.push(letter);
  }
  console.log(array);
  console.log(array[0]);
  console.log(array[array.length - 1]);

  if (array[0] === array[array.length - 1]) {
    console.log(true);
  } else {
    console.log(false);
  }
};
loop(string2);
const string1 = "bob";
const string3 = "ana";
const string2 = "eve";
const string4 = "alana";

const string5 = "mary";
const string6 = "jake";
const string7 = "popppppo";

const test1 = loop(string1);
const test2 = loop(string2);
const test3 = loop(string3);
const test4 = loop(string4);
const test5 = loop(string5);
const test6 = loop(string6);
const test7 = loop(string6);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);


*/

/*
  Add written explanation of your solution here
I declared a variable containing an empty array inside the function. I iterate through the string passed in as a parameter so that each letter is stored separately in the array. I then created a conditional statement to return true if the element at position [0] of the array, aka the first letter is === to the element at array.length - 1 position of the array, aka the last letter of the word. If the first and last letter are ===, the function returns true, else, it returns false. If it returns true, the word is a Palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
