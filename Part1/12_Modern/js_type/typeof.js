// 데이터 타입
// 기본형(Primitive): Number, String, Boolean, Null, Undefined + Symbol, BigInt
// 참조형(Reference): Object

// JS 강제 형 변환
// 덧셈
2+"3"; // "23"

// 곱셈, 뺄셈, 나눗셈
"10" - 5;  // 5
"20" / 4;  // 5
"5" * "3"; // 15
"hello" * 3; // NaN

// typeof 사용
typeof 'Codeit'; // string
typeof Symbol(); // symbol
typeof {}; // object
typeof []; // object
typeof true; // boolean
typeof(false); // boolean
typeof(123); // number
typeof(NaN); // ⭐️ number
typeof(456n); // bigint
typeof(undefined); // undefined

typeof 100;       // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // ⭐️ "object" (오래된 버그)
typeof {};        // "object"
typeof [];        // "object"

function sayHi() {
console.log('Hi!?');
}

typeof sayHi; // ⭐️ function (함수는 객체이지만 function 반환)