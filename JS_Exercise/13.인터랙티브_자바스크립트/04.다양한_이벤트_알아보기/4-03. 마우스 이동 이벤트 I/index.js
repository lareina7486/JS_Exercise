// 마우스 이동 이벤트 I 실습

document.addEventListener('mousemove', function () {
  console.log('마우스가 이동 중입니다');
});

// const box = document.querySelector('#box');

// box.addEventListener('mouseover', function () {
//   console.log('마우스가 들어왔습니다.');
// });

// box.addEventListener('mouseout', function () {
//   console.log('마우스가 나갔습니다');
// });

// 뷰포트(보이는 화면)기준 마우스의 위치
// document.addEventListener('mousemove', function (event) {
//   console.log('clientX', event.clientX);
//   console.log('clientY', event.clientY);
// });

// 전체 페이지 기준 마우스의 위치
// document.addEventListener('mousemove', function (event) {
//   console.log('pageX', event.pageX);
//   console.log('pageY', event.pageY);
// });

// 특정 요소 기준 마우스의 위치
// box.addEventListener('mousemove', function (event) {
//   console.log('offsetX', event.offsetX);
//   console.log('offsetY', event.offsetY);
// });

// mouse 위치
box.addEventListener('mousemove', function (e) {
  console.log('=== 마우스 위치 ===');
  console.log('client:', e.clientX, e.clientY);
  console.log('page:', e.pageX, e.pageY);
  console.log('offset:', e.offsetX, e.offsetY);
});

// throttle
let throttleTimer = null;

document.addEventListener('mousemove', function (event) {
  if (throttleTimer) return;
  const x = event.clientX;
  const y = event.clientY;

  throttleTimer = setTimeout(() => {
    console.log('마우스의 위치', x, y);
    throttleTimer = null;
  }, 1000);
});
