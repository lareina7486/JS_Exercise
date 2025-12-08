// < 띄어쓰기 규칙 >
// 연산자 = 앞뒤 띄우기
// 쉼표 = 뒤에 띄우기
// 콜론 = 앞 X, 뒤 O
// 키워드(if, for…) 뒤는 띄우기
// 함수명 뒤는 띄우지 않기
// 중괄호 { 는 앞에 공백 하나
// 배열/객체 요소는 쉼표 뒤에 띄우기

//함수 관련 주석은 /** */
// 함수 설명, 매개변수 타입, 반환값 타입 및 자동 완성, 타입 오류 정정 등 제공

let name = "esther";
// let name = "reina" //다시 선언X
name = "reina"; // 값 변경

// ⭐️ 모던JS에서는 const 권장, 재할당이 필요한 경우만 let 사용
const SPEED_LIMIT = 50; // 안바뀌는 상수는 대문자로
const a = 30; // 그냥 보통 쓰는 변수는 대문자 X

let _ = 1;
let $ = 3; // 변수명에 달러, 언더스코어 사용가능

let message1 = "I'm a boy.";
// let message2 = 'I\'m a boy.';
let message3 = `My name is ${name}`; // 백틱: 문자열 안에 변수 넣을 때
// 템플릿 리터럴: 백틱( ` )으로 감싸진 문자열
// 내부에 ${...} 문법을 사용하여 변수 or 표현식 작성 -> 문자열에 포함시킬 수 있음
let message4 = `나는 ${27 + 1}살 입니다.`;

console.log(3 + (4 * 5) / 6);
const x = 1 / 0; // infinity

// NaN = Not a number이라는 number 타입 숫자값
// 수학 계산이 실패하거나 숫자로 변환할 수 없을 때
const y = name / 2;
NaN === NaN; // false
Number.isNaN(NaN); // true

// null: 값이 존재하지 않음
// undefined: 값을 할당하지 않음
let age;
console.log(age); // undefined

// ==: 동등 연산자 (타입 강제 변환 후 비교, 사용X)
// ===: 일치 연산자 (타입, 값이 둘 다 같아야 true, 표준)
console.log(1 == "1"); // true
console.log(1 === "1"); // false

// typeof
console.log(typeof name); // string 타입
console.log(typeof true); // boolean 타입
console.log(typeof null); // object 타입 (객체형), 하지만 사실 null은 객체가 아님 (js 오류)
console.log(typeof undefined); // undefined 타입

// 문자열 더하기
const a_ = "나는 ";
const realName = "에스더";
const b = " 입니다.";
console.log(a_ + name + b); // 나는 에스더 입니다.

// 숫자를 문자열과 함께 더하면 문자열로 변경 되어서 합쳐짐.
const realAge = 28;
console.log(a_ + realAge + "살" + b); // 나는 28살 입니다.

// alert: 알려줌(확인 버튼 있는 메세지창), prompt: 입력받음, confirm: 확인 받음(예, 아니오)
// const userName = prompt("이름을 입력하세요."); // 브라우저에서만 동작, readline 사용
// const reservDate = prompt("예약일을 입력하세요.", "2025-10-"); // 칸에 default 값 제시

alert(userName + "님" + " 어서오세요.");
alert(`${userName}님 어서오세요.`);

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult); // true, false 반환

// 명시적 형변환
// String(), Number(),Boolean()
// Boolean() false인 경우: 숫자 0, 빈 문자열, null, undefined, NaN
Number("1234abcd"); // Number("문자") = NaN
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Boolean(0); // false
Boolean("0"); // true
Boolean(""); // false
Boolean(" "); // true

// 연산자는 우선순위 가짐
// *, / >> +, -
let num = 10;
num %= 5; // num 값을 5로 나눈 나머지를 다시 num에 대입한다.
const result1 = num++; // 10
const result2 = ++num; // 11

// 조건문
if (money > 5000) {
  rideTaxi();
} else if (money > 2000) {
  rideBus();
} else {
  walk();
}

if (age > 19) {
  console.log("환영합니다.");
} else if (age === 19) {
  console.log("수능 잘보세요.");
} else {
  console.log("안녕히 가세요.");
}

// 논리 연산자: ||(or), &&(and), !(not)
// or는 첫번째 true를 발견하는 즉시 평가를 멈춤
// and는 첫번째 false를 발견하는 즉시 평가를 멈춤
// 따라서, 순서를 잘 배치해서 코딩해야 연산량을 줄일 수 있음
const age2 = 18;
const isAudult = age > 19; // isAudult 변수 형식 = boolean

if (!isAudult) {
  console.log("돌아가");
}

// 반복문
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

let i = 0;
while (i < 10) {
  console.log(i + 1);
  i++;
}

while (true) {
  let answer = confirm("계속 할까요?");
  if (!answer) {
    break;
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    // 0이면 짝수 -> console 실행, 1이면 홀수 -> continue로 건너뜀
    continue; // 괄호 안씀!
  }
  console.log(i);
}

//switch문
let fruit = prompt("무슨 과일을 사고 싶나요?");
switch (fruit) {
  case "사과":
    console.log("100원 입니다.");
    break;
  case "키위": //break를 안해주면 이후 코드를 모두 실행. 키위=300원
  case "멜론":
    console.log("300원 입니다.");
    break;
  default:
    console.log("그런 과일은 없습니다.");
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// 함수: 한번에 한 동작만 하도록 작성
// 직관적인 네이밍: showError, getName, createUserData, checkLogin
/** x: int, y: int => int */
function myFunction(x) {
  let temp = 2 * x + 3;
  return temp;
}
console.log(myFunction(1));

function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello("Esther");

function sayHeollo_2(name) {
    msg = "Hello";
    if(name) {
        msg += `, ${name}`;
    }
    console.log(msg);
}
sayHeollo_2();
sayHeollo_2('Esther');

// 전역변수, 지역변수 -> 되도록 지역변수로 사용하기

let newName = name || 'friend'; // A가 참이면 A 반환, A가 거짓이면 B 반환

// default value
function sayHello(name = 'friend') { // name 매개변수가 없는 경우만 friend 값 대입
  console.log();  // return문이 없거나, return; 만 하면 undefined 반환
}

// 매개변수 없는 방식
function fly() {
  openWings();
  while (true) {
    moveWings();
  }
}

// [추천] 함수 선언문: 어디서든 호출 가능 = 호이스팅 = 미리 모든 함수 읽어봄
sayHello_3();
function sayHello_3() {
  console.log("Hello");
}
sayHello_3();

// 함수 표현식: 코드에 도달하면 생성
function sayHello = function() {
  console.log("Hello");
}
sayHello();

///////////////////////////////////////////////////////////////

// 함수 선언문
function add(a, b) {
  return a + b;
}

// 다른 방식 <화살표 함수>
const add = (a, b) => a + b;

const add = (a, b) => {
    return a + b;
}

const add3 = (a, b) => (a + b);

// 매개변수 1개
const square = x => x * x;
// 매개변수 없을때,
const hello = () => console.log("Hello!");
// 객체 반환 -> 괄호로 감싸기
const makeUser = (name) => ({ name });

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// 객체 (Object)
const superman = {
  name: 'clark',
  age: 33,      // 마지막에 쉼표 넣어주기
}

superman.name // 'clark' // 콤마, [] 둘 다 사용 가능
superman['age'] // 33

superman // Object { age: 30, name: "clark", } // 알파벳 순서대로 출력됨

super.gender = 'male';
superman['hairColor'] = 'black';

delete superman.hairColor;

superman.birthday; // undefined
'birthDay' in superman; // false
'age' in superman; // true

// 단축 프로퍼티
const _age = 63;
const superman = {
  name: 'clark',
  _age,              // age: age인 경우 age로 작성 가능
  gender: 'male',
}

// 객체 반환
function makeObject(name, age) {
  return {
    name,
    age,
    hobby: "football",
  }
}
const Mike = makeObject('Mike', 30);
console.log(Mike); // Object { age: 30, hobby: "football", name: "Mike", }

'age' in Mike // true
'birthday' in Mike // false

if (!('age' in user) || user.age>20){
  return;
}


// for...in 반복문: 객체를 순회
for (let key in superman) {
  console.log(key);
  console.log(superman[key]);
}

// 객체 - method, this
// method: 객체 프로퍼티로 할당 된 함수
const superman = {
  name: 'clark',
  age: 33,
  fly() {   // fly: function() {  // function 생략가능
    console.log('${this.name}날아갑니다.');
  }
}
superman.fly();

// 주의 - 화살표 함수는 자신만의 this를 가지지 않음
// 화살표 함수에서 this 사용 -> 그 this는 전역객체를 가리킴
// ⭐️ 객체 메소드 작성시, 화살표 함수 사용 X
// 전역객체: 브라우저(window), node.js(global)
// this는 js에서 중요하고 헷갈리는 개념

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// 배열: 순서가 있는 리스트
// index: 0부터 시작
// 배열 내에 문자, 숫자, 객체, 함수 등 포함 가능
let myArray = ['a', 'b', 'd'];

myArray[2] = 'c'; // ['a', 'b', 'c']
myArray.length; // 3
myArray.push('d'); // ['a', 'b', 'c', 'd']
myArray.pop(); // ['a', 'b', 'c']

// shift(제거), unshift(추가)는  배열 맨 앞에서 동작
// 3개 unshift 하고 -> shift 하면 3개가 복구 됨
myArray.shift(); // ['b', 'c']
myArray.unshift('a') // ['a', 'b', 'c']

// for
for (let i = 0; i < myArray.length; i++) {
  console.log(days[index]); // 요소 전체 출력
}

// for ... of
// 인덱스 없는 방법
for (let alph of myArray) {
  console.log(alph); // 요소 전체 출력
}

myArray.forEach((element) => {
  console.log("나무찍기" + element);
});
