// 함수 선언식
function greet() {
  console.log('안녕하세요!!!');
}

// 함수 선언식
function add(x, y) {
  return x + y;
}

// 함수 표현식
const greet2 = function () {
  console.log('안녕하세요');
};

const add2 = function (x, y) {
  return x + y;
};

const handle = function (func) {
  func();
  return func();
};

greet2();
console.log(add2(1, 2));

const button = document.addEventListener('click', function () {});
