// 객체의 value가 함수 타입인 것을 의미해요!
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

const result = calculator.add(1, 2);
const result3 = calculator.substract(1, 2);
const result4 = calculator.multiply(1, 2);

const result2 = calculator['add'](4, 6);
console.log(result2);

// type (key: "add" | "substract" | "multiply", x: number, y: number) => void
function printCalc(key, a, b) {
  const result = calculator[key](a, b);
  console.log(`계산 결과는 ${result} 입니다.`);
}

printCalc('add', 3, 4);
printCalc('substract', 1, 4);
printCalc('multiply', 2, 4);
// printCalc('sqaure', 2, 4);
