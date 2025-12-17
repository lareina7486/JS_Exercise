// class로 태그 선택하기 실습

// id로 가져오기 document.getElementById
const fruits = document.getElementsByClassName('fruit');
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

for (let fruit of fruits) {
  console.log(fruit);
}

const fruitsArray = [...fruits];

const nonExist = document.getElementsByClassName('non-exists');
console.log('nonExist', nonExist);

// if (nonExist.length === 0) {
//   console.log('요소가 없습니다.');
//   return;
// }

// console.log('요소가 있습니다');

const fruits2 = document.getElementsByClassName('fruit');

for (let fruit of fruits2) {
  fruit.addEventListener('click', function () {
    console.log(`${fruit.textContent}를 클릭 했습니다.!`);
  });
}
