const laptop = {
  brand: 'LG',
  model: 'gram',
  price: 1_500_000,
  weight: '990g',
  display: '15인치',
  color: 'black',
};

// const brand = laptop.brand;
// const model = laptop.model;

const { brand, model: productName1, color = 'white', ...rest } = laptop;

console.log(brand, productName1, color);
console.log(rest);

const product = {
  'product-name': '무선 이어폰',
  'serial-number': 'ABC-123-XYZ',
  price: 89000,
};

const { 'product-name': productName, 'serial-number': serialNumber } = product;

console.log(productName, serialNumber);

const response = {
  data: [1, 2, 3],
  status: 200,
};

const { data: numbers, status } = response;

console.log(numbers);
console.log(status);

const user = {
  address: {
    city: '대전',
    district: '유성구',
  },
};

const {
  address: { city },
} = user;

// const city = user.address.city;
console.log(city);

const a = { b: { c: { d: { e: 'hello' } } } };
const {
  b: {
    c: {
      d: { e },
    },
  },
} = a;
console.log('e', e);
