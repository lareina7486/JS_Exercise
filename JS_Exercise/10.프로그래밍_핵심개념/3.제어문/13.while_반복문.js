// while (조건) {
//   // 조건이 참(true)일 동안 반복 실행될 코드
// }

let count = 1_000;

while (count > 0) {
  console.log(count); // 5, 4, 3, 2, 1,
  count--; // 0
}

// 위험
while (true) {
  console.log(count);
  count--;
}
