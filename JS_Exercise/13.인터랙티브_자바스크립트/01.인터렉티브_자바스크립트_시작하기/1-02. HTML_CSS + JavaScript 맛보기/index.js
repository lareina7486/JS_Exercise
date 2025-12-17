// HTML_CSS + JavaScript 맛보기 실습
// 수량 표시 요소 찾기
const quantityElement = document.querySelector('#quantity');

// 더하기 버튼 찾기
const plusButton = document.querySelector('.btn-plus');

// 빼기 버튼 찾기
const minusButton = document.querySelector('.btn-minus');

// 더하기 버튼 클릭 시
plusButton.addEventListener('click', function () {
  // 현재 수량 가져오기
  let currentQuantity = Number(quantityElement.textContent);
  // 1 증가
  currentQuantity = currentQuantity + 1;
  // 화면에 표시
  quantityElement.textContent = currentQuantity;
});

// 빼기 버튼 클릭 시
minusButton.addEventListener('click', function () {
  // 현재 수량 가져오기
  let currentQuantity = Number(quantityElement.textContent);
  // 1 감소 (최소값은 1)
  if (currentQuantity > 1) {
    currentQuantity = currentQuantity - 1;
    quantityElement.textContent = currentQuantity;
  }
});

const colorButtons = document.querySelectorAll('.color-btn');

// 각 색상 버튼에 이벤트 리스너 등록
colorButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // 버튼의 data-color 속성 값 가져오기
    const color = button.getAttribute('data-color');
    // 수량 요소의 색상 변경
    quantityElement.style.color = color;
  });
});
