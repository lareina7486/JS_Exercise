// const vs let

const a = 10;

// 1. 안전성
// a = 12;
// a = [1, 2, 3, 4, 5];

const array = [1, 2, 3, 4, 5, 6];
const obj = { a: 1, b: 2 };
obj.c = 3;

console.log(obj);

let user = null;
{
  user = {
    name: '은결님',
    //
  };
}
