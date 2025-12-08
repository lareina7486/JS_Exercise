// 문자열 (String)
console.log('Hello, World!');
console.log("I love JavaScript!");

console.log("그가 말했습니다. '안녕!'");
console.log('자바스크립트의 별명은 "JS"입니다.');

// 이스케이프 시퀀스(\)
console.log('그가 말했습니다. \'안녕!\'');

// 문자열 연산
console.log('Hello, ' + 'World!'); // 'Hello, World!'

let name = '김코딩';
let message = '안녕하세요, ' + name + '님!';
console.log(message); // '안녕하세요, 김코딩님!'

console.log(100 + 50);   // 150 (숫자 덧셈)
console.log('100' + '50'); // '10050' (문자열 연결)


// 문자열 활용 (length, slice, toUpperCase(), includes(), indexOf())
let myStatus = 'Hello, World!';
console.log(myStatus.length); // 13

// 0번 위치부터 5번 위치 전까지 잘라냅니다.
console.log(myStatus.slice(0, 5)); // 'Hello'

// 7번 위치부터 끝까지 잘라냅니다.
console.log(myStatus.slice(7)); // 'World!'

console.log(myStatus.toUpperCase()); // 'HELLO, WORLD!'
console.log(myStatus.toLowerCase()); // 'hello, world!'

console.log(myStatus.includes('Hello')); // true
console.log(myStatus.includes('Bye'));   // false

console.log(myStatus.indexOf('World')); // 7
console.log(myStatus.indexOf('Bye'));   // -1


// 템플릿 문자열: 백틱으로 감싸고, `${}`로 변수·표현식을 삽입할 수 있는 문자열
// 플레이스홀더: 템플릿 문자열에서 변수나 표현식을 삽입하는 `${}` 구문

// 템플릿 문자열
const message2 = `안녕하세요 ${name}님!`;

console.log(message);
console.log(message2);

const item = '노트북';
const price = 1_200_000;
const quantity = 5;

// 문자열
const orderSummary =
  item +
  ' ' +
  quantity +
  '개를 주문 하셨습니다. 총 ' +
  price * quantity +
  '원 입니다.';

// 템플릿 문자열
const orderSummary2 = `${item} ${quantity}개를 주문하셨습니다. 총 ${
  price * quantity
}원 입니다.`;

console.log(orderSummary);
console.log(orderSummary2);


// 연산식이나 함수 호출 등 값을 반홚하는 모든 표현식 넣을 수 있음
// type(x: string) => string
function getGretting(name) {
    return `반갑습니다, ${name} 고객님!`;
}

const customerName = 'esther';
let greetingMessage = `${getGretting(customerName)} 즐거운 쇼핑 되세요.`;

console.log(greetingMessage)