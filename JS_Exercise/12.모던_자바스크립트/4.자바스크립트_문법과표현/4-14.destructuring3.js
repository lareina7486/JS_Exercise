const laptop = {
  brand: 'LG',
  model: 'gram',
  price: 1_500_000,
  weight: '990g',
  display: '15인치',
};

function printProduct({ brand, model, color = 'white', price }) {
  console.log(`제품: ${brand} ${model}`);
  console.log(`색상 ${color}`);
  console.log(`가격 ${price}원`);
}

printProduct(laptop);

function fetchData({ url, method = 'GET', headers = {}, timeout = 5000 }) {
  console.log(`${method} 요청: ${url}`);
  console.log(`타임아웃: ${timeout}ms`);
  console.log(`헤더: ${JSON.stringify(headers)}`);
}

fetchData({ url: 'www.google.com' });

//
function greet({ name = '기본값' } = {}) {
  console.log(`안녕하세요. ${name}님!`);
}

const user = {};

greet();
