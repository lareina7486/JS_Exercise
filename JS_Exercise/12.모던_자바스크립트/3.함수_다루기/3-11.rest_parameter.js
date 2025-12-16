function printArguments(a, ...args) {
  console.log('first', a);
  for (let arg of args) {
    console.log(arg);
  }
}

printArguments('young', 'mark', 'koby');

function printRank(first, second, third, ...others) {
  console.log('레이스 결과');
  console.log('우승자: ', first);
  console.log('준우승자: ', second);
  console.log('3등은', third);

  for (let other of others) {
    console.log(other);
  }
}

printRank('Phil', 'Won', 'Emma', 'Min', 'Luke', 'Mike', 'Son');
