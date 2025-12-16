// 1. 지역 스코프
// function showLocalPrice() {
//   const price = 2000;
//   console.log(`상점 가격: ${price}원`);
// }

// showLocalPrice();

// console.log(price);

// 2. 전역 스코프
// const price = 3000;

// function showGlobalPrice() {
//   console.log(`본사 가격: ${price}원`);
// }

// showGlobalPrice();
// console.log(`전체 정가: ${price}원`);

// 3. 스코프 체인
let price = 3000;

function showLocalPrice() {
  let price = 2000;
  console.log(`지역 가격: ${price}원`); // 2000원
}

showLocalPrice();
console.log(`전체 정가: ${price}원`); // 3000원

const globalVar = '전역';

// function outer() {
//   const outerVar = '외부함수';

//   function inner() {
//     const innerVar = '내부함수';

//     console.log(innerVar); // 내부함수
//     console.log(outerVar); // 외부함수
//     console.log(globalVar); // 전역
//   }

//   inner();
// }

// outer();

// 4. 클로저
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const func = outer();

func();
func();
func();