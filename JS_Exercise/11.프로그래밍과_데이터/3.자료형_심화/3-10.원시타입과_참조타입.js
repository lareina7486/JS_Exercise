// 원시 타입
// string, number, boolean, null, undefined, symbol, bigInt

// 참조 타입
// object, array, function, class, prototype, ...

let a = 10;
let b = a;

a = 12;
a = 13;

console.log(b); // 10;

// const obj1 = { a: 10, b: 12, c: { d: 1, f: 2 }, d: [1, 2, 3, 4, 5, 6] };
// const obj2 = obj1;

// obj1.a = 20; // 10;
// console.log(obj2.a);

const obj1 = {
  a: 10,
  b: 12,
  c: { d: 1, f: 2 },
  d: [1, 2, 3, 4, 5, 6],
  e: null,
  f: undefined,
  g: function (x) {
    return x + x;
  },
};

const copy = { ...obj1 }; // Destructuring -> shollow copy
const copy2 = JSON.parse(JSON.stringify(obj1)); // 제한적 copy
const copy3 = structuredClone(obj1); // deep copy

obj1.a = 20;
obj1.d.push(7);

console.log(copy.a); // 10
console.log(copy.d); // [1, 2, 3, 4, 5, 6]
console.log(copy2);
console.log(copy3);
