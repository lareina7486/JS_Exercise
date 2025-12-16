// 배열을 안전하게 삭제하는 법

// 특정 위치에서 끝까지 삭제하기

// fruits.splice(2);
// console.log(fruits); // [ '사과', '바나나' ]

// 특정 개수만 삭제하기
// fruits.splice(1, 2);
// console.log(fruits); // [ '사과', '딸기', '수박' ]

// 하나만 삭제하기
// fruits.splice(2, 1);
// console.log(fruits); // [ '사과', '바나나', '딸기', '수박' ]

// const fruits = ['사과', '바나나', '수박'];

// fruits.splice(2, 0, '포도', '딸기'); // 선택 된 인덱스 기준, 앞에 추가 된다.
// console.log(fruits);

const fruits = ['사과', '바나나', '포도', '수박'];

fruits.splice(1, 2, '망고', '키위'); // [ '사과', '망고', '키위', '수박' ]
console.log(fruits);
