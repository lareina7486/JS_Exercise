console.log(typeof 123);
console.log(typeof 'hello world');
console.log(typeof true);

function sayHello() {
  console.log('hello');
}

console.log(typeof sayHello); // function
console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(typeof ('Hello' + 'World'));
// console.log('string' + 'World');
