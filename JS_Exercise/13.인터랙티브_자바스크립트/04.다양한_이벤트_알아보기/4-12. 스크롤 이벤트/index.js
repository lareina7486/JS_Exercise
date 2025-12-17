// 스크롤 이벤트 실습
// window.addEventListener('scroll', function () {
//   console.log('스크롤 중');
// });

const scrollInfo = document.querySelector('#scroll-info');
// const threshold = 100;

// window.addEventListener('scroll', function () {
//   scrollInfo.textContent = `스크롤 위치: ${window.scrollY}`;
// });

// window.addEventListener('scroll', function () {
//   if (window.scrollY > threshold) {
//     scrollInfo.style.backgroundColor = 'tomato';
//     scrollInfo.textContent = '100px 이상 스크롤됨!';
//   } else {
//     scrollInfo.style.backgroundColor = '#333';
//     scrollInfo.textContent = `스크롤 위치: ${window.scrollY}`;
//   }
// });

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY; // 스크롤 상단 부분 위치
  const docHeight = document.documentElement.scrollHeight; // 전체 페이지 높이
  const windowHeight = window.innerHeight;
  const maxScorll = docHeight - windowHeight;

  const percent = Math.round((scrollTop / maxScorll) * 100);
  scrollInfo.textContent = `진행률: ${percent}%`;
});
