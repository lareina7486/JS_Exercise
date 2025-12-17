// 이벤트와 버튼 클릭 실습
const likeButton = document.querySelector('#likeBtn');

console.log(likeButton);

likeButton.onclick = function () {
  console.log('좋아요를 눌렀습니다!');
};

const countButton = document.querySelector('#countBtn');
let count = 0;

countButton.onclick = function () {
  count += 1;
  countButton.textContent = `클릭 횟수: ${count}`;
};

const colorButton = document.querySelector('#colorBtn');

colorButton.onclick = function () {
  document.body.style.backgroundColor = 'lightBlue';
};
