// 객체, key(property)-value
// type Computer = {
//     manufacturer: string;
//     modelName: string;
//     releaseYear: number;
//     mainboard: {
//         cpu: string
//         ram: string
//     }
// }
const myComputer = {
  manufacturer: 'Apple', // string
  modelName: 'MacBook M1 Pro', // string
  releaseYear: 2001, // number
  isLaptop: true,
  mainboard: {
    cpu: 'M1',
    ram: '16GB',
  },
};

const data = {
  'serial-number': 'ABC-123-XYZ',
  'last-update-date': '2025-11-12',
};

// 변수 표기 방법
// serialNumber // camel case
// SerialNumber // pascal case
// serial-number // kebab case
// serial_number // snake case

console.log('myComputer', myComputer);
console.log(typeof myComputer); // object
