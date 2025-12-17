// css 선택자로 태그 선택하기 실습
// document.querySelector('CSS 선택자')

const title = document.querySelector('#main-title');

console.log(title);

// NodeList, Array-like
const product = document.querySelectorAll('.product');

console.log(product);

const productArray = Array.from(product);

productArray.map((product) => {
  console.log(product);
});

// const paragraph = document.querySelector('p');

// console.log(paragraph);

const innerP = document.querySelector('.container > p');

console.log(innerP);

const menuItems = document.querySelectorAll('#menu li');

console.log(menuItems);

const emailInput = document.querySelector('input[type="email"]');

console.log(emailInput);

const allInputs = document.querySelectorAll('input[placeholder]');

console.log(allInputs);

const productsByQuery = document.querySelectorAll('.product');
const productsByClassName = document.getElementsByClassName('.product');

const li = document.createElement('li');
li.className = 'product';
li.textContent = '상품 4';

const list = document.querySelector('#list');

list.appendChild(li);

console.log(productsByQuery.length);
