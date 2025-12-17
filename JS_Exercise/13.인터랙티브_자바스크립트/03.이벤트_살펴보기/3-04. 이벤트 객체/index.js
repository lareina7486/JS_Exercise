// 이벤트 객체 실습
var button = document.querySelector('#myButton');

button.addEventListener('click', function (event) {
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
});
