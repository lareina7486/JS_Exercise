// for (초기화; 조건; 증감) {
//   // 조건이 true일때 실행된다.
// }

// 1 ~ 10까지 출력;
for (let i = 1; i < 10; i++) {
  console.log(i); // 1,
}

console.log('-------------------');

// 10 ~ 1까지
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log('-------------------');

// 홀수만 출력
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

console.log('-------------------');

// 짝수만 출력
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}