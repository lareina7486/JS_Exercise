// 스코프 & 스코프 체인 & 클로저
// 코드가 실행되기 위해서는 코드 그 자체 뿐 아니라
// 주변 환경도 같이 메모리에 저장되는데, 그걸 렉시컬 인바이런먼트라고 해요
// 그리고 렉시컬 인바이런먼트 때문에, 스코프 체인이 가능한거죠
// 스코프 체인에 의해서 변수가 참조 되기 때문에 함수가 실행되고 나서도
// 참조 카운트가 생겨서 가비지 컬렉터에 의해서 메모리가 해제가 되지 않는 것을 클로저라고 합니다

clg
//1. 지역 스코프
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