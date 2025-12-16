const scoreElement = document.getElementById('score');

console.log(scoreElement);

const titleElement = document.getElementById('title');

console.log(titleElement);

const addOneButton = document.getElementById('add-one');

console.log(addOneButton);

const buttonsContainer = document.getElementById('buttons');

console.log(buttonsContainer);

const nonExists = document.getElementById('non-exist');

if (!nonExists) {
  console.log('요소가 없음');
  return;
}

console.log('요소가 있음');

nonExists.addEventListener();
