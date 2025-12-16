// truthy
// '1';
// 1
// "false"
// -1
// {}
// []
// function () {}

if (function () {}) {
  console.log('안녕');
}

// falsy
// false;
// null;
// undefined;
// NaN;
// 0
// -0;
// 0n;
// '';

if ('') {
  console.log('hello');
}

function greet(name) {
  if (!name) {
    console.log('이름을 입력해주세요!');
    return;
  }
  console.log(`안녕하세요. ${name}님!`);
}

greet('');
greet(null);
greet(undefined);

greet('은혜');

// 삼항 연산자
// 조건 ? 값1 : 값2;

// 짝홀판별
const num = 7;

const result = num % 2 === 0 ? '짝수' : '홀수';
console.log(result);

//
const score = 60;
const grade = score > 90 ? 'A' : score > 80 ? 'B' : score > 70 ? 'C' : 'D';

console.log(grade);
