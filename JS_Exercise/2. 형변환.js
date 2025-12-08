// "명시적" 형 변환 : 개발자가 직접 함수로 자료형 바꿈
// String()
let birthYear = 1999;
console.log(birthYear);        // 1999 (number)
console.log(String(birthYear)); // '1999' (string)

let isAdult = true;
console.log(isAdult);          // true (boolean)
console.log(String(isAdult));   // 'true' (string)

// Number()
let age = '25';
console.log(age);        // '25' (string)
console.log(Number(age)); // 25 (number)

let isWorking = true;
console.log(isWorking);          // true (boolean)
console.log(Number(isWorking)); // 1 (number)

let isStudent = false;
console.log(isStudent);          // false (boolean)
console.log(Number(isStudent)); // 0 (number)

let userName = '김코딩';
console.log(Number(userName)); // NaN
console.log(typeof NaN); // number
// NaN: 숫자로 표현할 수 없는 연산의 결과를 표현하기 위한 특별한 숫자 값
// 하지만 값이 이상해도 숫자 형태
// NaN === NaN (false)

// Boolean()
// Truthy 값
console.log(Boolean('hello')); // true
console.log(Boolean(123));     // true
console.log(Boolean(-1));      // true 

// Falsy 값
console.log(Boolean(''));      // false
console.log(Boolean(0));       // false
console.log(Boolean(NaN));     // false


// 묵시적(암시적) 형 변환 : js가 코드 실행 과정에서 자동으로 자료형 바꿈
// 덧셈 -> 하나라도 문자열이 있으면 문자열로 변환
console.log(100 + 50); // 150// 문자열 + 숫자 -> 문자열 연결
console.log('100' + 50); // '10050'// 숫자 + 문자열 -> 문자열 연결
console.log(100 + '50'); // '10050'// 문자열 + 문자열 -> 문자열 연결
console.log('100' + '50'); // '10050'

// 덧셈 외 연산자 -> 숫자형
console.log('100' - 50);    // 50
console.log(100 * '2');     // 200
console.log(true + 1);      // 2 (true가 1로 변환됨)
console.log(100 - false);   // 100 (false가 0으로 변환됨)

console.log(typeof ('123' + 100)); // "123100", string
console.log(typeof ('123' - 50)); // 50, number
console.log(typepf('100' * '50')); // 5000, number

console.log(typepf('100' / '10')); // 10, number
console.log(typepf('10' ** '2')); // 100, number

// === (일치비교) -> type부터 비교, 이후 값 비교
console.log(null === undefined); // false
console.log(1 === '1'); // false
console.log(1 === true); // false

// == (동등비교) -> 값 비교만
console.log(null == undefined); // true
console.log(1 === '1'); // true
console.log(1 === true); // true
