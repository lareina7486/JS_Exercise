/** Variable 선언하기
 * 1. var: 더 이상 쓰지 않음
 * 2. let
 * 3. const
 */

var name = '자바스크립트';
console.log(name); // var는 eslint에서 금지 -> 경고문구
console.log('name');

let name2 = '리액트';
console.log(name2);

name2 = '넥스트'; // 재할당(값 변경) 가능
console.log(name2);

const name3 = '노드';
console.log(name3);

// name3 = '익스프레스'; -> Error: const 변수의 값은 변경 불가

// 변수 선언만
let nest;
console.log(nest); // undefined (자동으로 undefined 할당)

// 할당
nest = '네스트';
console.log(nest); // 네스트

// const는 반드시 선언할때 할당(초기화)을 함께 해야한다.