var a = 10;
var b = {};
var c = [];

var d; // 호이스팅

console.log(d); // undefined

var d = 'hello world';

var x = 10; // 전역 변수, window.a, global.a;

function test() {
  var y = 20;
  console.log(x);
  console.log(y);
}

test();
// console.log(y);

{
  var s = 10; // 전역
}

console.log(s);
