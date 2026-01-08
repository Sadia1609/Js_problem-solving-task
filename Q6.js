//Problem 6: Sum of All Numbers in an Array
function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    // console.log(number);
    sum = sum + number;
  }
  return sum;
}

const num = [1, 2, 3, 4];
const sum = sumOfNumbers(num);
console.log(sum);
