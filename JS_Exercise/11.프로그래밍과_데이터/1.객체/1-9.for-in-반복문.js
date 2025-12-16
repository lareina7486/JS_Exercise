// for-in
// for (변수 in 객체) {
//   // 동작 부분
// }

const library = {
  name: '중앙도서관',
  openYear: 2010,
  isOpen: true,
  weekendOpen: false,
  mainBook: '해리포터',
};

for (let key in library) {
  //   console.log(key);
  //   console.log(library[key]);
  console.log(`key는 ${key}, value: ${library[key]} 입니다.`);
}

const ranking = {
  4: '김민성',
  3: '박도담',
  2: '지은서',
  1: '오동철',
};

for (let key in ranking) {
  console.log(`key는 ${key}, value: ${ranking[key]} 입니다.`);
}

console.log('--------------------------');

const mixed = {
  name: '홍길동',
  3: '세번째',
  age: 20,
  1: '첫번째',
  city: '서울',
};

for (let key in mixed) {
  console.log(`key는 ${key}, value: ${mixed[key]} 입니다.`);
}
