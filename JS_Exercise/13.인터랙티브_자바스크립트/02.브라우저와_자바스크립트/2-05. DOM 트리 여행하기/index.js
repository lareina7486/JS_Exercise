// DOM 트리 여행하기 실습

const product = document.querySelector('#product');

if (!product) {
  console.log('요소가 없음');
  //   return;
}

console.log(product.children); // htmlCollection

// console.log(product.children[0]);
// console.log(product.children[3]);

// 첫번째 자식 요소
console.log(product.firstElementChild);

// 마지막 자식 요소
console.log(product.lastElementChild);

// 부모 요소
console.log(product.parentElement); // body

console.log(product.parentElement.parentElement);

const productName = document.querySelector('#name');

console.log(productName.parentElement.parentElement.parentElement);

console.log(product.previousElementSibling);

console.log(product.nextElementSibling);
