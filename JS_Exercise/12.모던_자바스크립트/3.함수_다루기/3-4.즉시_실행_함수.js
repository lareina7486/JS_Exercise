(function sayHi() {
  console.log('Hi');
})();

// parameter를 받는 즉시 실행 함수

(function add(x, y) {
  console.log(x + y);
})(5, 5);
