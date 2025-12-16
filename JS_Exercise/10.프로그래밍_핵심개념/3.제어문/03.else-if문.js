// if (조건1) {
//   // 조건 1, true
// } else {
//   // 조건 1, false
//   if (조건2) {
//     // 조건 2, true
//   } else {
//     // 조건 2, false
//   }
// }

const hour = 14; // 현재 시간, 24시간 기준

if (hour < 6) {
  console.log('안녕히 주무세요');
} else {
  if (hour < 12) {
    console.log('좋은 아침 입니다.');
  } else {
    if (hour < 18) {
      console.log('안녕하세요');
    } else {
      console.log('좋은 저녁 입니다.');
    }
  }
}

if (hour < 6) {
  console.log('안녕히 주무세요');
} else if (hour < 12) {
  console.log('좋은 아침 입니다.');
} else if (hour < 18) {
  console.log('안녕하세요');
} else {
  console.log('좋은 저녁 입니다.');
}
