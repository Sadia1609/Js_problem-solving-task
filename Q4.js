//Problem 4: Find the Maximum Number
function findMax(numbers) {
  let max_num = numbers[0];
  for (const num of numbers) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}

console.log(findMax([5, 1, 9, 3]));
