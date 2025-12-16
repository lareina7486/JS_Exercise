const books1 = ['해리포터', '반지의 제왕', '나니아 연대기', '어린왕자'];

for (let i = 0; i < books1.length; i++) {
  const book = books1[i];
  console.log(book);
}

console.log('--------------------');
// for (변수 of 배열) {
//   동작부분;
// }

for (let book of books1) {
  console.log(book);
}

const scores = [85, 90, 78, 92, 100];

let sum = 0;
for (let score of scores) {
  // sum = sum + score;
  sum += score;
}

console.log(sum / scores.length);

console.log('------------------');

for (let score of scores) {
  console.log('실행');
}
