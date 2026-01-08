//Problem 3: Check for Palindrome
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  //   console.log(reverseStr);
  return str === reverseStr;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
