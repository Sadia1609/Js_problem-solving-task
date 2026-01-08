//Problem 1: Reverse a String
function reverseString(strings) {
  let reverse = "";
  for (const letter of strings) {
    reverse = letter + reverse;
  }
  return reverse;
}

console.log(reverseString("hello"));
