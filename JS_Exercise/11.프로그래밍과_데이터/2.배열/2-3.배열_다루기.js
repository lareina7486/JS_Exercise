// 배열도 객체다
const members = ['철수', '영희', '민수', '지은', '다은'];

console.log(typeof members); // object

// for (let key in members) {
//   console.log('key', key);
//   console.log('value', members[key]);
// }

const len = members.length;
console.log(len);

const last = members[members.length - 1];
console.log(last);

members[5] = '수훈';
console.log(members);

members[10] = '한준';
console.log(members);

members[0] = '현제';
console.log(members);

delete members[1];
console.log(members);
