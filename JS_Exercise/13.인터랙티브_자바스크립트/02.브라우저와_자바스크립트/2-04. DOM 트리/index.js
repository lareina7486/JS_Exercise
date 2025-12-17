// DOM 트리 실습
const list = document.querySelector('ul');

// 부모 노드에 접근
console.log(list.parentNode); // block

// 자식 노드에 접근
console.log(list.children);

// 형제 노드에 접근
console.log(list.previousElementSibling); // p
console.log(list.nextElementSibling); // null
