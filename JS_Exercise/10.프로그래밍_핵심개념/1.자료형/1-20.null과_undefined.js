// undefined: 값이 정의되지 않았다.
let userName;
console.log(userName);

const obj = {};
console.log(obj.userName); // undefined
console.log(typeof userName); // undefined

// null: 값을 의도적으로 비웠다.
let nickName = '오동철';
console.log(nickName);
nickName = null;
console.log(nickName);
console.log(typeof null); // object

console.log(null == undefined); // true
console.log(null === undefined); // false
