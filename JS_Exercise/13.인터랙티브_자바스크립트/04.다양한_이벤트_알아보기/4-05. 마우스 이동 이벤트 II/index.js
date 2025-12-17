// 마우스 이동 이벤트 II 실습
const outer = document.querySelector('#outer');

outer.addEventListener('mouseover', function (event) {
  console.log('mouseover', event.target);
  console.log('relatedTarget:', event.relatedTarget);
});

outer.addEventListener('mouseout', function (event) {
  console.log('mouseout', event.target);
  console.log('mouseout', event.relatedTarget);
});

// outer.addEventListener('mouseenter', function (event) {
//   console.log('mouseenter', event.target.id);
// });

// outer.addEventListener('mouseleave', function (event) {
//   console.log('mouseleave', event.target.id);
// });
