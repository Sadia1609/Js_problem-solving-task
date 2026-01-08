//Write a function that calculates the factorial of a number using a loop.
function factorial(num) {
  let factorial_num = 1;
  for (let i = 1; i <= num; i++) {
    factorial_num *= i;
  }
  return factorial_num;
}
console.log(factorial(5));
