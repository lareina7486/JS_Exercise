// // 이벤트 핸들러 등록하기 실습
const submitButton = document.querySelector('#submit-btn');

// // submitButton.addEventListener('click', function () {
// //   console.log('유효성 검사 완료');
// // });

// // submitButton.addEventListener('click', function () {
// //   console.log('데이터 전송 중...');
// // });

// // submitButton.addEventListener('click', function () {
// //   console.log('완료 메시지 표시');
// // });

function handleSubmit() {
  console.log('제출 완료');
}

submitButton.addEventListener('click', handleSubmit);

submitButton.removeEventListener('click', handleSubmit);

// const submitButton = {
//   addEventListener: function (eventType, func) {
//     // ??????
//     // ????

//     func();
//   },
// };

const couponButton = document.querySelector('#coupon-btn');

function receiveCoupon() {
  console.log('쿠폰 발급 완료');
}

couponButton.addEventListener('click', receiveCoupon, { once: true });
