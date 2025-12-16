const price = 4.5678;

// 소수점 자리수 고정
console.log(price.toFixed(2)); // 반올림, 4.57
console.log(price.toFixed(1)); // 반올림, 4.6
console.log(price.toFixed(0)); // 반올림, 5

console.log(typeof price.toFixed(2)); // string

// 진법 변환
const num = 255;

console.log(num.toString(2)); // 1111 1111
console.log(num.toString(8)); // 377
console.log(num.toString(16)); // ff

console.log(num); // num
console.log(typeof num.toString(2)); // string
