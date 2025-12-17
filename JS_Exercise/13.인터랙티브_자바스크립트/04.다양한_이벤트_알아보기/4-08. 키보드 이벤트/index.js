// 키보드 이벤트 실습
const input = document.querySelector('#input');

// input.addEventListener('keydown', function (event) {
//   console.log('keydown:', event.key);
// });

// input.addEventListener('keyup', function (event) {
//   console.log('keyup', event.key);
// });

// duplicated
// input.addEventListener('keypress', function (event) {
//   console.log('keyup', event.key);
// });

input.addEventListener('keydown', function (event) {
  console.log('key:', event.key);
  console.log('code:', event.code);
});
