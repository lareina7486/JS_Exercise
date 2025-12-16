let level = 10;

// level = level + 1; // 11
// console.log(level);

// 복합 할당 연산자
// level = level + 1;
level += 1;
level -= 1;
level *= 2;
level /= 2;
level %= 3;
console.log(level);

let exp = 150; // 원래 경험치

// 몬스터 사냥으로 100 경험치 획득
// exp = exp + 100;
exp += 100;

console.log(exp);

let value = 1;

let nextValue = ++value;
console.log(nextValue); // 2

let nextVal = --value;
console.log(nextVal); // 1

let a = 5;

// 전위 증가
console.log(++a); // 6
console.log(a); // 6

let b = 5;

// 후위 증가
console.log(b++); // 5
console.log(b); // 6

let c = 1;

// 1. c = c + 1; // 2
// 2. c += 1; // 2
// 3. c++  // 2
// 4. ++c  // 2
