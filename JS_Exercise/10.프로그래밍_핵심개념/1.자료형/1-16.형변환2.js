// 묵시적 형변환
console.log('123' + 100); // "123100", string;
console.log('100' - 50); // 50, number;
console.log('100' * '50'); // 5000, number

console.log(typeof ('100' / '10')); // 10, number
console.log(typeof ('10' ** '2')); // 100, number

// === (일치비교), 타입 비교 -> 값 비교, 빠름
console.log(null === undefined); // false
console.log(1 === '1'); // false
console.log(1 === true); // false

// == (동등비교), 값 비교, 타입 변환 후 비교, 느림
console.log(null == undefined); // true
console.log(1 == '1'); // true
console.log(1 == true); // true
