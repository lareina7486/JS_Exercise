console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true;
console.log(5 <= 3); // false
console.log(5 === 5); // true
console.log(5 !== 3); // true

const text = 'codeit';
console.log(text === 'codeit'); // true
console.log(text !== 'Codeit'); // true

// 논리 연산자
const isLoggedIn = false;
const isPremium = true;

console.log(isLoggedIn && isPremium);

// OR 연산자
const isOwner = false;
const isAdmin = false;

console.log(isOwner || isAdmin);

// NOT연산자
const isUser = false;
console.log(!isUser);
