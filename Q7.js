//Find Even Numbers in an Array
function isEven(number) {
  const evenNumbers = [];
  for (const num of number) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6];

const evenNum = isEven(numbers);
console.log(evenNum);
