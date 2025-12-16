const numbers = [1, 2, 3, 4];

console.log(numbers);
// spread는 펼치다
console.log(...numbers);

// rest parameter는 하나로 합치다.
const sumAll = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};

console.log(sumAll(1, 2, 3, 4)); // 10

// 배열 복사하기
const original = ['html', 'css'];
const copy = [...original]; // shollow copy

// 배열 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = [...arr1, ...arr2];
console.log(result);

const start = [1, 2];
const end = [5, 6];

const addZero = [0, ...start];
console.log(addZero);

const numbers1 = [...start, 3, 4, ...end];
console.log(numbers);

const numbers2 = [50, 20, 21, 10, 30, 40, 72];

console.log(Math.max(...numbers2));
console.log(Math.min(...numbers2));

const user = {
  name: '성민',
  age: 20,
  score: 100,
  hobbit: ['축구', '농구'],
};

// shollow copy
const cloneUser = {
  ...user,
  memo: '열심히함',
};

user.id = 10;
user.hobbit.push('배구');

console.log(user);
console.log(cloneUser);

// type(x: object) => void
function printUser(user) {
  console.log(user);
}

printUser({ ...cloneUser });
