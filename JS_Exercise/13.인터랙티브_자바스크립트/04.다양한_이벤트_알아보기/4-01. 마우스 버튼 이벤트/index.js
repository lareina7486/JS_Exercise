// 마우스 버튼 이벤트 실습
const box = document.querySelector('#box');

// box.addEventListener('mousedown', function (event) {
//   if (event.button === 0) {
//     console.log('왼쪽 클릭');
//     return;
//   }

//   if (event.button === 1) {
//     console.log('가운데 클릭');
//     return;
//   }

//   console.log('오른쪽 클릭');
// });

box.addEventListener('click', function () {
  console.log('왼쪽 클릭');
});

box.addEventListener('contextmenu', function () {
  console.log('오른쪽 클릭');
});

box.addEventListener('dblclick', function () {
  console.log('더블클릭');
});

box.addEventListener('mousedown', function () {
  console.log('버튼 누름!');
});

box.addEventListener('mouseup', function () {
  console.log('버튼 뗌!');
});
