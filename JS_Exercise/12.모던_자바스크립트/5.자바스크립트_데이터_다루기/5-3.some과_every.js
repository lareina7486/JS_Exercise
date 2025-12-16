// some
const ages = [15, 22, 18, 30, 17];

const hasAdult = ages.some((age) => age >= 20);
console.log(hasAdult);

const cart = [
  { product: '키보드', quantity: 0, inStock: false },
  { product: '노트북', quantity: 1, inStock: true },
  { product: '마우스', quantity: 2, inStock: true },
];

const hasOutOfStock = cart.some((product) => !product.inStock);
console.log(hasOutOfStock);

const outOfStock = cart.find((product) => !product.inStock);
console.log(outOfStock);

// every
const ages2 = [35, 22, 28, 30, 27, 13];

const allAdults = ages2.every((age) => age >= 20);
console.log(allAdults);

console.log('-------------------------------');

// example
const people = [
  { name: '김민수', age: 25 },
  { name: '이지은', age: 19 },
  { name: '박서준', age: 30 },
  { name: '김고은', age: 18 },
];

const allAdults2 = people.every((p) => p.age >= 19);
console.log(allAdults2);

const hasMinor = people.some((p) => p.age < 19);
console.log(hasMinor);
