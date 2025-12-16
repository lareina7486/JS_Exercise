const name = '민성';
const phone = '010-1234-5678';
const money = 10_000_000_000;

const user = {
  name,
  phone,
  money,
};

console.log(user);

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  substract: function (x, y) {
    return x - y;
  },
};

const calculator2 = {
  add(x, y) {
    return x + y;
  },
  substract(x, y) {
    return x - y;
  },
};

console.log(calculator2.add(1, 3));
console.log(calculator2.substract(3, 1));

const propertName = 'student' + 'Count';
const school = {
  [propertName]: 500,
};

console.log(school);

// type () => string
const getKey = () => 'address';

const company = {
  [getKey()]: '강남구',
};
console.log(company);
