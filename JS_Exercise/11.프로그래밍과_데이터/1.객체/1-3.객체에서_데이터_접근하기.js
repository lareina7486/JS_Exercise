const myComputer = {
  manufacturer: 'Apple', // string
  modelName: 'MacBook M1 Pro', // string
  releaseYear: 2021, // number
  isLaptop: true, // boolean
  mainboard: {
    cpu: 'M1', // stirng
    ram: '16GB', // string
  },
  'serial-number': 'ABC-123-XYZ', // string
  'last-update-date': '2025-11-12', // string
};

console.log(myComputer.mainboard);

console.log(myComputer['releaseYear']);
console.log(myComputer['serial-number']);

function printSpec(propertyName) {
  console.log(`선택하신 ${propertyName}의 값은 ${myComputer[propertyName]}`);
}

printSpec('manufacturer');
printSpec('serial-number');
printSpec('gpu');
