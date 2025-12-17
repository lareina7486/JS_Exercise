// 요소 노드 프로퍼티 실습

const specs = document.querySelector('#specs');

console.log(specs.innerHTML); // 요소 안쪽만

const firstItem = specs.children[0];

// firstItem.addEventListener('click', () => {
//   console.log('클릭!!');
// });

// specs.innerHTML += '<li>512GB SSD</li>';

console.log(specs.outerHTML); // 요소 자제가 포함되어 있다.

// specs.outerHTML = '<p>새로운 문단 입니다.</p>';

// textContent
console.log(specs.textContent);

// specs.textContent = '모든 내용은 이 텍스트로 교체가 됩니다.';
specs.textContent = '<li>첫 번째</li><li>두 번째</li>';
