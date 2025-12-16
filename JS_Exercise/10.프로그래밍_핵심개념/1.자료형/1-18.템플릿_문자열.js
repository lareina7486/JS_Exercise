const name = '윤숙희';
const message = '안녕하세요 ' + name + '님!';
const message2 = `안녕하세요 ${name}님!`;

console.log(message);
console.log(message2);

const item = '노트북';
const price = 1_200_000;
const quantity = 1;

const orderSummary =
  item +
  ' ' +
  quantity +
  '개를 주문하셨습니다. 총 ' +
  price * quantity +
  '원 입니다.';

const orderSummary2 = `${item} ${quantity}개를 주문하셨습니다. 총 ${
  price * quantity
}원 입니다.`;

console.log(orderSummary);
console.log(orderSummary2);

// type (x: string) => string
function getGreeting(name) {
  return `반갑습니다, ${name} 고객님!`;
}

const customerName = '박종장';
const greetingMessage = `${getGreeting(customerName)} 즐거운 하루 되세요!`;

console.log(greetingMessage);
