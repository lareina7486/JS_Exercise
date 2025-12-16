const someText = 'hello world'; // string
const text = 'i love javascript'; // string

console.log("그가 말했습니다. '안녕!'");

console.log('hello ' + 'world');

const name = '이석우';
const message = '안녕하세요 ' + name + '님!';

console.log(message);

// type (x: string) => string
function printMessage(name) {
  return '안녕하세요 ' + name + '님!';
}

const result = printMessage('백은결');
console.log(result);

console.log('123' + '456'); //123456
console.log('123' - 1); // 122

const r = 'a'.charCodeAt(0);
console.log(r);
