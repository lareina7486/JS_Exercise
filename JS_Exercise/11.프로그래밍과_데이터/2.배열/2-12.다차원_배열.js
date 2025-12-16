const twoDimensional = [
  [1, 2],
  [3, 4],
];

console.log(twoDimensional[0]); // [1, 2]
console.log(twoDimensional[1]); // [3, 4]

console.log(twoDimensional[0][0]); // 1
console.log(twoDimensional[0][1]); // 2
console.log(twoDimensional[1][0]); // 3
console.log(twoDimensional[1][1]); // 4

console.log('------------------------');

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix) {
  for (let num of row) {
    console.log(num);
  }
}
