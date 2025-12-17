// 브라우저의 기본 동작 실습
const link = document.querySelector('#myLink');

link.addEventListener('click', function (event) {
  const confirmed = confirm('정말 이동하시겠습니까?');
  if (!confirmed) {
    event.preventDefault();
  }
});

const form = document.querySelector('#myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const input = form.querySelector('input');

  if (input.value.length < 3) {
    console.warn('3자 이상 입력해주세요');
    return;
  }

  console.log('제출');
});
