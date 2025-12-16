const rank = ['효준', '유나', '민환', '재하'];

// const first = rank[0];
// const second = rank[1];

const [first, second, third = '없음'] = ['효준', '유나'];

console.log(first);
console.log(second);
console.log(third);

// swap
let a = 10;
let b = 20;

// let temp = b;

// b = a;
// a = temp;

[a, b] = [b, a];

console.log(a);
console.log(b);
