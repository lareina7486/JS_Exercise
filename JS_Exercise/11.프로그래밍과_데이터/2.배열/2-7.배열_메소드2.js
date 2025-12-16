const fruits = ['사과', '바나나', '포도', '딸기'];

// 첫번째 요소 삭제하기
const result = fruits.shift();

console.log(fruits);
console.log(result); // 사과

// 마지막 요소 삭제
const fruits2 = ['사과', '바나나', '포도', '딸기'];

const resutl2 = fruits2.pop();
console.log(fruits2); // ['사과', '바나나', '포도']
console.log(resutl2); // 딸기

// 맨 앞에 추가하기
const fruits3 = ['바나나', '포도', '딸기'];

const result3 = fruits3.unshift('사과');
console.log(fruits3); // ['사과', '바나나', '포도', '딸기'];
console.log(result3); // 새로운 배열의 길이

// 맨 뒤에 요소 추가하기
const fruits4 = ['사과', '바나나', '포도'];

const result4 = fruits4.push('딸기');
console.log(fruits4); // ['사과', '바나나', '포도', '딸기']
console.log(result4); // 새로운 배열의 길이
