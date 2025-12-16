// 문자열의 길이
const message = 'hello world';

console.log(message.length); // 11;

// 반복문
for (let i = 0; i < message.length; i += 1) {
  const char = message[i];
  console.log(char);
}

console.log('-------------------');

for (let char of message) {
  console.log(char);
}

// 앞에서 찾기, indexOf
const email = 'public.winverse@gamil.com';

console.log(email.indexOf('@')); // 15
console.log(email[15]);

console.log(email.indexOf('.com')); // 21;
console.log(email.indexOf('!!!')); // -1

// 포함되어 있는지 아닌지
console.log(email.includes('@')); // true
console.log(email.includes('!!!')); // false

// 대문자
const message1 = 'Hello World';
console.log(message1.toUpperCase());

// 소문자
console.log(message1.toLowerCase());

// 공백 제거
const password = '               12341234          ';
console.log(password.trim()); // 12341234
