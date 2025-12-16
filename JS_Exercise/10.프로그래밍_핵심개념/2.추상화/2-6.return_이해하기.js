// 1. function 내부에서 값을 외부로 반환할때,
// 2. 함수의 실행을 중단한다.

// type (x: number) => number
function calculatorFee(age) {
  if (age < 19) {
    return 8_000;
  }
  return 10_000;
}

const fee = calculatorFee(25);
// console.log(`당신의 입장료는 ${fee}원 입니다.`);

// 2. 함수를 중단하는 return

// type (x: number) => string | void
function checkAvailability(age) {
  console.log(`${age}살 고객님, 입장 가능 여부 확인 중!`);

  if (age < 8) {
    console.log('보호자의 동반이 필요합니다.');
    return;
    console.log('hello world'); // dead code, 절대 실행될 일이 없는 코드
  }

  console.log('확인 완료, 즐거운 시간 보내세요!');
  return '입장 가능!';
}

console.log(checkAvailability(7));
console.log('----');
console.log(checkAvailability(25));
