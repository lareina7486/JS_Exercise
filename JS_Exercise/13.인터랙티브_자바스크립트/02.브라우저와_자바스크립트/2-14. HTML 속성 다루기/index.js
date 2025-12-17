// HTML 속성 다루기 실습
const logo = document.querySelector('#logo');

console.log(logo.id);
console.log(logo.src);
console.log(logo.alt);

console.log(logo.getAttribute('src'));

const menu = document.querySelector('#menu');

console.log(menu['id']);
console.log(menu.className);
console.log(menu.getAttribute('custom-attr'));

// getAttribute
console.log(menu.getAttribute('id'));

// setAttribute
const link = document.querySelector('#link');

link.setAttribute('target', '_blank');
link.setAttribute('href', 'https://www.google.com');

// removeAttribute
const box = document.querySelector('#box');

box.removeAttribute('custom-attr');
