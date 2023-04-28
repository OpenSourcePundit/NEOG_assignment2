// 5. Write an ES6 function that takes in an array of numbers and returns the sum of all the even numbers.
//Use the nullish coalescing operator to handle undefined or null values.

export const sumOfEvenNumbers = (arr) =>
  arr.reduce((sum, curr) => (curr % 2 === 0 ? sum + curr : sum), 0) ??
  "Error Occured";

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumOfEvenNumbers([1, 3, 5])); // 0
