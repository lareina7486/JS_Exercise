//할당 연산자
let level = 10;

// level = level + 1; // 11
// console.log(level);

// 복합 할당 연산자
// level = level + 1;
level += 1;
level -= 1;
level *= 2;
level /= 2;
level %= 3;
console.log(level);

let exp = 150; // 원래 경험치

// 몬스터 사냥으로 100 경험치 획득
// exp = exp + 100;
exp += 100;

console.log(exp);

let value = 1;

let nextValue = ++value;
console.log(nextValue); // 2

let nextVal = --value;
console.log(nextVal); // 1

let a = 5;

// 전위 증가
console.log(++a); // 6
console.log(a); // 6

let b = 5;

// 후위 증가
console.log(b++); // 5
console.log(b); // 6


// 함수의 실행 순서

function takeOrder() {
  console.log('주문 접수 완료');
}

console.log('레스토랑 오픈!');

takeOrder();

console.log('레스토랑 마감!');


// return이 있는 함수의 실행 순서
// type (x: string) => string
function makeBurger(type) {
  return `${type} 버거 완료`;
}

console.log('버거 만들기 시작'); // 1

const finishedBurger = makeBurger('새우');
console.log(finishedBurger); // 2

console.log('버거 만들기 끝'); // 3

// 여러 개의 함수를 호출
// type (x: string) => number
const 불고기_버거_가격 = 4500;
const 치즈_버거_가격 = 4000;
const 기본_버거_가격 = 3000;

function getPrice(menu) {
  if (menu === '불고기 버거') {
    console.log('불고기 버거 선택!');
    return 불고기_버거_가격;
  }

  if (menu === '치즈 버거') {
    console.log('치즈 버거 선택!');
    return 치즈_버거_가격;
  }

  return 기본_버거_가격;
}

const totalPrice = getPrice('불고기 버거') + getPrice('치즈 버거');
console.log(`총 주문 금액: ${totalPrice}원`);


1. function 내부에서 값을 외부로 반환할때,
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

console.log(checkAvailability(7)); // undefined
console.log('----');
console.log(checkAvailability(25));