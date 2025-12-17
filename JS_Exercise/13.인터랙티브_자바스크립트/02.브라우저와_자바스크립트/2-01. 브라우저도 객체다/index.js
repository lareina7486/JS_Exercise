// 브라우저도 객체다? 실습
console.log(window);

// 1. 브라우저의 창 크기
console.log('브라우저 너비:', window.innerWidth);
console.log('브라우저 높이:', window.innerHeight);

// 2. 새 창열기
window.open();
window.open('https://www.google.com');

// 3. 현재 창 닫기
// window.close();

// 4. 현재 URL 확인하기
console.log(window.location.href);

// 5. 페이지 새로고침
// window.location.reload();

// 6. document 객체
console.log(window.document === document);

console.log(window.Math.PI);
console.log(window.Date.now());

// 7. 전역 객체 접근하기
console.log(globalThis);

// 8. 브라우저 정보
console.log('=== 브라우저 정보 ===');
console.log('너비:', window.innerWidth);
console.log('높이:', window.innerHeight);
console.log('현재 URL:', window.location.href);
console.log('브라우저:', window.navigator.userAgent);

setTimeout(() => {
  console.log('새로고침');
  // window.location.reload();
}, 3000);
