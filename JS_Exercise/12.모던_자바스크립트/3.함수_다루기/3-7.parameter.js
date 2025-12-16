// type (x: string) => void
function greet(name = '민성', age = 20) {
  //   console.log(`my keyword is ${keyword}`);
  console.log(`Hi, My name is ${name}, age: ${age}`);
}

greet('상현');
greet('javascript');
greet('코드잇');
greet(123);

greet();
greet(null);

greet('프로그래머');

greet();
