const numbers = [1, 2, 3, 4, 5, 6];

// filter, 새로운 배열을 반환 합니다.
const odds = numbers.filter((value) => value % 2 === 1);

console.log(odds);

const products = [
  { name: '노트북', brand: 'Apple', price: 2500000 },
  { name: '마우스', brand: 'Logitech', price: 50000 },
  { name: '키보드', brand: 'Apple', price: 150000 },
  { name: '모니터', brand: 'LG', price: 400000 },
  { name: '이어폰', brand: 'Apple', price: 300000 },
  { name: '스피커', brand: 'Sony', price: 200000 },
];

const appleProducts = products.filter((product) => product.brand === 'Apple');

console.log(appleProducts);

const scores = [45, 72, 88, 93, 55, 67, 81, 90];

const highScores = scores.filter((score) => score >= 80);

console.log(highScores);

console.log('===========================================');

// find
const products2 = [
  { name: '마우스', brand: 'Logitech', price: 50000 },
  { name: '키보드', brand: 'Apple', price: 150000 },
  { name: '모니터', brand: 'LG', price: 400000 },
  { name: '스피커', brand: 'Sony', price: 200000 },
  { name: '노트북', brand: 'Apple', price: 2500000 },
  { name: '이어폰', brand: 'Apple', price: 300000 },
];

const appleProducts1 = products2.find((product) => product.brand === 'Apple');

console.log(appleProducts1);

const scores2 = [45, 72, 88, 93, 55, 67, 81, 90];

const highScore = scores2.find((value) => value > 90);
console.log(highScore);
