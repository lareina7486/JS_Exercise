const num = 0.1 + 0.2;

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.3 - 0.1); // 0.19999999999999998
console.log(0.7 + 0.1); // 0.7999999999999999
console.log(1.1 + 2.2); // 3.3000000000000003

// 해결하기
console.log(typeof Number(num.toFixed(1))); // 0.3
