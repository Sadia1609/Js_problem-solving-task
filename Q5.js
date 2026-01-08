//Problem 5: Remove Duplicates from an Array
function noDuplicate(arr) {
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

console.log(noDuplicate([1, 2, 2, 3, 4, 4]));
