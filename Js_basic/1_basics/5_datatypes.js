// JS = Dynamic Typing
// 변수 타입을 명시적으로 선언 X, 값에 의해 타입을 '추론'

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

const infinity = Infinity; // Number
const nInfinity = -Infinity; // Number

/**
 * Stirng 타입
 */
const codeFactory1 = '코드 팩토리'; // 코드 팩토리
const codeFactory2 = "코드 '팩토리'"; // 코드 '팩토리'
const codeFactory3 = '코드 팩토리'; // 코드 팩토리
const codeFactory4 = '코드 "팩토리"'; // 코드 "팩토리"

// 이스케이프 문자(Escape Character) -> 잘 안씀 (템플릿 리터럴로 대체)
// 문자열 안에서 특수문자 표현
// \n, \t, \\, \'
console.log("안녕\n자바\t스크\\립트'");

// 템플릿 리터럴: `(백틱)을 쓰는 문자열 문법
// 문자열 결합 편함, 여러줄 문자열 가능, 표현식/함수 가능
// 백틱 안에 이스케이프 문자 사용 가능
console.log(`안녕
자바
스크립트 \n \t \\ \'`);

const userName = '강에스더';
console.log('유저 이름은 ' + userName + '입니다.');
console.log(`유저 이름은 ${userName}입니다.`); // 윗줄과 똑같은 결과

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined 타입
 * : 사용자가 직접 값을 초기화 하지 않았을때
 * 자동으로 지정되는 값
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * : 명시적으로 '없는 값'을 초기화 할때 사용
 */
let init = null;
console.log(init);
console.log(typeof init); // object (js 오류)

/**
 * Symbol 타입
 * : 유일무이한 값을 생성할때 사용 (Symbol 함수 호출)
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2); // true

const symbol1 = Symbol('1'); // 값은 1이지만 유일무이하다.
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false

/**
 * Object 타입
 * : key, value의 쌍으로 이루어짐
 */
const dictionary = {
  red: '빨강',
  blue: '파랑',
  orange: '주황',
  yello: '노랑',
};

console.log(dictionary);
console.log(dictionary['red']); // 빨강
console.log(dictionary.blue); // 파랑
console.log(typeof dictionary); // object

// Array 타입: 값을 리스트로 나열 할수있는 타입
const colorArray = ['빨강', '파랑', '주황', '노랑'];
console.log(colorArray);
console.log(colorArray[3]); // 노랑

colorArray[3] = '보라';
console.log(colorArray[3]); // 보라