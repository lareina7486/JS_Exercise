// type () => void
function greet() {
  console.log('안녕하세요!');
}

// type () => void
function farewell() {
  console.log('안녕히 가세요!');
}

// type (x: () => void) => void
function excuteAction(action) {
  console.log('동작을 실행합니다...');
  action();
}

// excuteAction(() => {
//   console.log('안녕하세요!');
// });

// type (x: string) => void
function greetPerson(name) {
  console.log(`안녕하세요. ${name}님`);
}

// type (x: string) => void
function farewellPerson(name) {
  console.log(`안녕히가세요. ${name}님`);
}

// type (x: (y: string) => void, z: string) => void
function excuteAction(action, personName) {
  console.log('동작을 실행합니다.');
  action(personName);
}

excuteAction(greetPerson, '은결');
excuteAction(farewellPerson, '서린');

function forEach(array, action) {
  for (let item of array) {
    action(item);
  }
}

function* filter(array, action) {
  for (let item of array) {
    if (action(item)) {
      yield item;
    }
  }
}

forEach([1, 2, 3, 4, 5], (num) => console.log(num * 2));

// const result = filter([1, 2, 3, 4, 5, 6, 7, 8], (num) => num % 2 === 0);

const iter = filter([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
