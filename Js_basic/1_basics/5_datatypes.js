/**
 * Data Types
 * 
 * Primitive Type(6개)
 * : Number, String, Boolean(불리언), undefined, null, Symbol
 * 
 * Object Type(1개)
 * : Object (Function, Array, Object ...)
 */


/**
 * Number 타입
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

const infinity = Infinity;   // Number
const nInfinity = -Infinity; // Number

/**
 * Stirng 타입
 */
const codeFactory1 = '코드 팩토리';    // 코드 팩토리
const codeFactory2 = "코드 '팩토리'"; // 코드 '팩토리'
const codeFactory3 = "코드 팩토리";   // 코드 팩토리
const codeFactory4 = '코드 "팩토리"'; // 코드 "팩토리"

// 이스케이프 문자(Escape Character) -> 잘 안씀 (템플릿 리터럴로 대체)
// 문자열 안에서 특수문자 표현
// \n, \t, \\, \'
console.log('안녕\n자바\t스크\\립트\'');

// 템플릿 리터럴: `(백틱)을 쓰는 문자열 문법
// 문자열 결합 편함, 여러줄 문자열 가능, 표현식/함수 가능
// 백틱 안에 이스케이프 문자 사용 가능
console.log(`안녕
자바
스크립트 \n \t \\ \'`);

const userName = '강에스더';
console.log('유저 이름은 '+ userName +'입니다.');
console.log(`유저 이름은 ${userName}입니다.`); // 윗줄과 똑같은 결과

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);