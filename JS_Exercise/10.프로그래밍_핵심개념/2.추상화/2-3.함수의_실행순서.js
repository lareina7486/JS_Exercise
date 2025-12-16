//  함수의 실행 순서
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
