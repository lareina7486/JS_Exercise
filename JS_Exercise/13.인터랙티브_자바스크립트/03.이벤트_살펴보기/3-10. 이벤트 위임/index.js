// 이벤트 위임 실습
const cartList = document.querySelector('#cart');

// const items = cartList.children;

// for (let item of items) {
//   item.addEventListener('click', function (event) {
//     event.target.classList.toggle('selected');
//   });
// }

// newItem.addEventListener()

cartList.addEventListener('click', function (event) {
  const item = event.target.closest('li');
  if (!item) return;
  event.target.classList.toggle('selected');
});

const newItem = document.createElement('li');
newItem.textContent = '무선 키보드';
newItem.classList.add('cart-item');
cartList.appendChild(newItem);
