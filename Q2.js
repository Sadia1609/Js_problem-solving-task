//Problem 2: Count Vowels in a String

function countVowel(string) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (const vowel of string) {
    if (vowels.includes(vowel)) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("programming"));
