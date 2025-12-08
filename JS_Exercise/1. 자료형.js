// 숫자형
// 사칙연산 가능
console.log(25000 + 3000); // 28000 (상품 가격 + 배송비)// 뺄셈
console.log(50000 - 25000); // 25000 (예산 - 상품 가격)// 곱셈
console.log(25000 * 3); // 75000 (상품 3개의 가격)// 나눗셈
console.log(25000 / 5); // 5000 (5개월 할부 시 1개월 납부액)

// 나머지 연산
console.log(28 % 6); // 4

// 거듭제곱 연산
console.log(2 ** 3); // 8

// 연산자 우선순위
// 3000 * 3이 먼저 계산됨
console.log(1000 + 3000 * 3); // 10000


// undefined: 값이 할당된 적 없음, 자바스크립트 엔진이 자동으로 할당
let userName;
console.log(userName);

const obj = {};
console.log(obj.userName); // undefined
console.log(typeof userName); // undefined

// null: 의도적으로 빈값 핢당, 개발자가 명시적으로 사용
let nickName = '오동철';
console.log(nickName);
nickName = null;
console.log(nickName);
console.log(typeof null); // object, js문법 오류

console.log(null == undefined); // true
console.log(null === undefined); // false


// 동등 비교(==)는 null과 undefined를 '값이 없음'이라는 같은 의미로 보고
// 암시적 형 변환을 하여 true로 판단
let a;
let b = null;
console.log(a == b); // true