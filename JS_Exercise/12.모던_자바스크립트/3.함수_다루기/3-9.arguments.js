function printArguments() {
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
  //   console.log(arguments); // 유사 배열 (Array-like)
  for (let arg of arguments) {
    console.log(arg);
  }
}

printArguments('young', 'mark', 'koby');
printArguments('Captin');
printArguments('s', 'j', 'm', 'k'); // 4번째 꺼는 무시

const greet = (name) => {
  console.log(name);
};

greet('hello');

const arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  arr.push(i);
  console.log('실행');
}
