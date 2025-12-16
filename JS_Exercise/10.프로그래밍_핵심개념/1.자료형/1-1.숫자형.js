const a = 10;
const b = 3.141592;

// 덧셈
console.log(10 + 10);

// 뺄셈
console.log(4 - 1);

// 곱셈
console.log(10 * 10);

// 나눗셈
console.log(9 / 3); // 3, 몫

// 나머지 연산
console.log(10 % 2);
console.log(15 % 2);

function isEven(n) {
  console.log(n % 2 === 0);
}

function isOdd(n) {
  console.log(n % 2 === 1);
}

isEven(10); // true
isEven(13); // false
isOdd(11); // true
isOdd(100); // false

// 거듭제곱 연산
const num1 = 2 ** 10;
const num2 = 3 ** 4;

console.log(num1);
console.log(num2);

const result1 = 10 + 10 * 3;
console.log(result1);

const result2 = (10 + 10) * 3;
console.log(result2);
