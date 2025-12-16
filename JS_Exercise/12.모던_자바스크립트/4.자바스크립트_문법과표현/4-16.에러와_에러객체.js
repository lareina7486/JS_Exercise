console.log('프로그램 시작!');

// console.log(name);
// const name = '상현';

// ReferenceError: 에러의 이름
// Cannot access 'name' before initialization: 에러의 메시지

const error = {
  name: 'ReferenceError',
  message: `Cannot access 'name' before initialization`,
};

// ReferenceError: 선언되지 않은 변수나 함수를 참조할때 발생합니다
// console.log(student);

// TypeError: 잘못된 자료형으로 작업을 시도할 때 발생합니다.
// const message = '안녕하세요';
// message();

// SyntaxError: 문법이 잘못되었을때, 코드 실행 전에 발생한다
// const user-name ='코딩'

// const error1 = new TypeError('잘못된 타입입니다');

// console.log(error1.name); // TypeError
// console.log(error1.message); // 잘못된 타입입니다

// throw error1;

throw new TypeError('잘못된 타입입니다');

console.log('hello');
