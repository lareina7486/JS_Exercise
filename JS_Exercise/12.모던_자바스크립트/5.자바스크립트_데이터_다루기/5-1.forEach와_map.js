const numbers = [1, 2, 3, 4, 5, 6];
const hello = ['H', 'E', 'L', 'L', 'O'];

// forEach, 반환하는게 없다.
hello.forEach((value, index, origin) => {
  console.log('origin', hello);
  console.log(`value: ${value}, index: ${index}`);
});

const result1 = [1, 2, 3, 4, 5, 6].forEach((value, index) => {
  console.log(`value: ${value}, index: ${index}`);
  return value;
});

// console.log('result', result1); // undefined

// map, 새로운 배열을 반환한다.
const result = ['H', 'E', 'L', 'L', 'O'].map((value, index) => {
  console.log(`value: ${value}, index: ${index}`);
});

const result2 = numbers.map((value, index) => {
  console.log(`value: ${value}, index: ${index}`);
  if (value % 2 === 0) {
    return;
  }
  return value;
});

console.log('numbers', numbers);
console.log('result', result2);
