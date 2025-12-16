console.log('사과' && '바나나'); //

// AND 연산자의 동작 방식
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR 연산자의 동작 방식
console.log(true || true); // true;
console.log(true || false); // true;
console.log(false || true); // true;
console.log(false || false); // false;

console.log(null && undefined); // null

function greet(name) {
  const userName = name ?? '손님';
  console.log(`${userName}, 안녕하세요!`);
}

greet(0);
greet(NaN);
greet(null);
greet(undefined);
