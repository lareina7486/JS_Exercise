// DOM 실습
// window
// document

// document
console.dir(document.head);
console.dir(document.body);
// console.log(typeof document);

const title = document.querySelector('#mainTitle');

console.dir(title.textContent);

title.textContent = 'DOM 학습 중!';

title.style.color = 'blue';
title.style.fontSize = '50px';
title.style.backgroundColor = 'yellow';

const darkButton = document.querySelector('#darkBtn');

darkButton.onclick = function () {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
};
