// input 태그 다루기 실습
const textInput = document.querySelector('#textInput');

// textInput.addEventListener('focus', function (event) {
//   console.log('focus: ', event.target);
// });

// textInput.addEventListener('blur', function (event) {
//   console.log('blur: ', event.target);
// });

// textInput.addEventListener('input', function (event) {
//   console.log('value :', event.target.value);
// });

textInput.addEventListener('change', function (event) {
  console.log(`value: ${event.target.value}`);
});

const checkInput = document.querySelector('#checkInput');

checkInput.addEventListener('change', function (event) {
  console.log('체크 상태', event.target.checked);
});

const selectInput = document.querySelector('#selectInput');

selectInput.addEventListener('change', function (event) {
  console.log('선택된 값', event.target.value);
});
