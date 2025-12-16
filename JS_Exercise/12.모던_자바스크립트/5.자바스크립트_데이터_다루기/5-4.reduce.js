[1, 2, 3, 4].reduce((accumulater, element, index) => {
  console.log(`accumulater: ${accumulater}`);
  console.log(`element: ${element}`);
  console.log(`index: ${index}`);
  console.log('---------------');
  return accumulater + element;
}, 100);

const result = [1, 2, 3, 4, 5].reduce((acc, cur) => {
  console.log(acc); // 0, 1, 3, 6, 10
  return acc + cur; // 1, 3, 6, 10, 15
}, 0);

console.log(result);

const fac = [1, 2, 3, 4].reduce((acc, cur = 4) => {
  console.log(acc); // 1, 1, 2, 6
  return acc * cur; // 1, 2, 6, 24
}, 1);

console.log(fac);

// factorial =
// 2! = 1 * 2;
// 3! = 1 * 2 * 3;
// 4! = 1 * 2 * 3 * 4;
// 5! = 1 * 2 * 3 * 4 * 5;
// 6! = 1 * 2 * 3 * 4 * 5 * 6;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// type result = {
//   odds: number[],
//   evens: number[],
// };

const result2 = numbers.reduce(
  (acc, cur) => {
    // 홀수
    if (cur % 2 === 1) {
      acc['odds'].push(cur);
    }

    // 짝수
    if (cur % 2 === 0) {
      acc['evens'].push(cur);
    }
    return acc;
  },
  { odds: [], evens: [] }
);

console.log(result2);

const products = [
  { name: '노트북', price: 1500000 },
  { name: '마우스', price: 30000 },
  { name: '키보드', price: 80000 },
  { name: '모니터', price: 400000 },
];

const pullName = products.reduce((acc, cur) => {
  return `${acc} ${cur.name}`;
}, '');

console.log(pullName);

const user = {
  name: '상현',
  age: 20,
};

Object.keys(user)
  .map(([key, value]) => {
    console.log(`${key}, ${value}`);
  })
  .filter()
  .reduce()
  .every();

[{}, {}, {}].forEach(() => {
  // 오래 걸리는 작업 (5초)
});

for (let item of [{}, {}, {}]) {
  // 오래 걸리는 작업 (5초)
}
