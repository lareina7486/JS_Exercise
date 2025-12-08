// [코드팩토리] [입문]
// 9시간만에 끝내는 코드팩토리의 Javascript 무료 풀코스

//4. Hello World 출력
console.log("Hello World"); //세미콜론 안넣어도 되지만, 넣는걸 추천
console.log("Hello", "World"); //,로 구분 가능


//Comment (주석)
// 코멘트를 작성하는 방법 1 (한줄)
console.log('Hello World'); // 옆쪽에 쓰기

// 코멘트를 작성하는 방법 2 (여러줄)
// 특이하게 /** */ 앞에는 별 두개, 뒤에는 별 하나임
/**
 * 이렇게 하면
 * 코멘트를 여러줄
 * 작성할 수 있습니다.
 */


// 변수(Variable) 선언하기
// 1. var : 더이상 쓰지 않음. 공부할때만 사용.
// 2. let
// 3. const

var name = '코드팩토리';
console.log(name); // 변수 사용

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

// let, var은 값 변경 가능
ive = '안유진' // 아이브->안유진
console.log(ive) // 안유진

// const는 값 변경 불가능, 선언시 초기값 할당 필수
const newJeans = '뉴진스';
// Const newJeans = '하니' // 에러

var name // 변수 선언 <- 자동으로 undefined 할당됨
console.log(name) // undefined
var name = '강에스더' // 할당
console.log(name) // 강에스더

// const girlFriend; // Error: const 선언은 초기화 필수

// Naming Convention (네이밍 컨벤션)
// 1. 영어(라틴문자) 사용, 문자/숫자 가능
// 2. _, $ 사용가능
// 3. 숫자 시작 불가능
// 4. 키워드는 변수명으로 사용 불가
let codefactory = '코드팩토리';
var $ive = '아이브';
const _yuJin = '안유진';

let 1name = 'no';
let const = 'attention'

// 암묵적 룰 (네이밍 컨벤션)
// 1. camleCase: 띄어쓰기 이후 글자 대문자로 / 변수 이름
// 2. snake_case: 언더스코어 + 소문자 / 파일 이름 / 파이썬
// 3. PascalCase: 첫번째 글자도 대문자(C#에서 많이씀)
const anYuJin = '안유진';

// Data Types (데이터 타입)

// Hoisting

// Operator (연산자)

// Memory (메모리 이론)

// if 문과 switch 문

// Loops (반복문)

// Coercion

// Functions (함수)

// Array Methods (배열 메서드)

// Object (객체)

// Copy by Value vs Copy by Reference

// 에러 핸들링


// 섹션 3. Class and OOP

// 클래스 기본기

// Getter and Setter (게터와 세터)

// Static Keyword (스태틱 키워드)

// Inheritance (상속)

// Super Keyword (슈퍼 키워드)

// Class Challenge (클래스 문제풀기)


// 섹션 4. 객체에 대한 모든 것
// 소개

// Property Attribute (프로퍼티 어트리뷰트)

// Immutable Objects (불변 객체) - extensible, seal, freeze

// Constructor Function (생성자 함수)

// Prototype (프로토타입)

// Scope (스코프)

// this

// Execution Context (실행 컨텍스트)

// Closure (클로저)


// 섹션 5. Async Programming (비동기 프로그래밍)

// 비동기 프로그래밍 소개

// Callback Hell and Promise (콜백헬과 프로미스)

// Async & Await

// 섹션 6. 다음으로!
// Typescript!
