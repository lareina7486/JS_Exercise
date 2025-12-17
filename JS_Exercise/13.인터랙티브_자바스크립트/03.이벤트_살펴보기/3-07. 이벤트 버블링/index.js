// 이벤트 버블링 실습
const container = document.querySelector('#container');
const box = document.querySelector('#box');
const button = document.querySelector('#button');

container.addEventListener('click', function () {
  console.log('container 클릭');
});

box.addEventListener('click', function () {
  console.log('box 클릭');
});

button.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('button 클릭');
});
