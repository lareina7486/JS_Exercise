// 명시적 형 변환

/* String, 문자열 변환 */
const birthYear = 1999;
console.log(typeof birthYear); // number;
console.log(typeof String(birthYear)); // string

// Number, 숫자형 변환
const age = '25';
console.log(typeof age);
console.log(Number(age)); // 25
console.log(typeof Number(age)); // number

const userName = '전주형';
console.log(Number(userName)); // NaN
console.log(typeof NaN); // number

// Boolean, 불린형 변환
console.log(Boolean('hello')); // true
console.log(Boolean(123)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(0)); // false
