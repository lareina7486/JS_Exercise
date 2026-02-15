/**
 * Hoising
 * : 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼
 * 느껴지는 현상
 */

console.log(name); // undefined
var name = '자바스크립트';
console.log(name); // 자바스크립트

// 실제로는 호이스팅되어 이렇게 동작
var name1;
console.log(name1);
name1 = '자바스크립트';
console.log(name1);

// let, const도 호이스팅 '된다'
console.log(esther); // Error
let esther = '에스더';

console.log(kang); // Error
const kang = '강';
