// console.log(number);
// const number = 123;

try {
  // 실행할 코드
  // 에러가 날지도 모르는 코드
} catch (error) {
  // 에러 발생 시 실행 할 코드
}

try {
  console.log('계산 시작');
  const reuslt = 1 + 1;
  console.log('결과는', reuslt);
} catch (error) {
  console.log('에러가 발생 했습니다');
}

try {
  console.log(number);
  const number = 123;
} catch (error) {
  console.log('에러가 발생 했습니다');
  console.error(error);
}

console.log('프로그램 종료');
