for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 7) {
    console.log('7을 만났습니다. 반복문 중단!');
    break;
  }
}

console.log('반복문 종료!');

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // 현재 반복을 건너뛰고, 다음 반복으로 넘어간다.
  }
  console.log(i); // 홀수만 출력됩니다.
}

let j = 1;
while (j <= 10) {
  if (j % 2 === 0) {
    j++;
    continue;
  }
  console.log(j);
  j++;
}
