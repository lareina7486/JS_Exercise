// Date
const now = new Date();
console.log(now);

// 밀리(ms)초로 생성,  1초/1000
const date1 = new Date(1000); // 1000ms -> 1초
console.log(date1);

// 문자열로 생성
const date2 = new Date('2025-12-09'); // 날짜만 지정하는 방식
const date3 = new Date('2025-12-09T16:29:00'); // 날짜와 시간을 모두 지정하는 방식

console.log(date2);
console.log(date3);

// 숫자 여러 개로 생성
const date4 = new Date(2025, 0, 15, 14, 30, 45);
const date5 = new Date(2025, 2, 15);
const date6 = new Date(2025, 2);

console.log(date4);
console.log(date5);
console.log(date6);

// Date 객체 메소드
const myBirthDay = new Date(2000, 5, 15);
console.log(myBirthDay.getTime()); // ms 표현한 것

const time = myBirthDay.getTime();
// console.log(time / 1000 / 60 / 60 / 24);

// 시간 차이
const startDate = new Date(2025, 0, 1);
const endDate = new Date(2025, 11, 31);

const timeDiff = endDate.getTime() - startDate.getTime();

console.log(timeDiff + 'ms');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');
console.log(timeDiff / 1000 / 60 / 60 / 24 + '일');

// 날짜 정보 가져오기
const today = new Date(2025, 2, 15, 14, 30, 45, 500);

console.log(today.getFullYear()); // 2025 (년)
console.log(today.getMonth()); // 2 (월, 0부터 시작 → 3월)
console.log(today.getDate()); // 15 (일)
console.log(today.getDay()); // 5 (요일, 0:일요일 ~ 6:토요일 → 금요일)
console.log(today.getHours()); // 14 (시)
console.log(today.getMinutes()); // 30 (분)
console.log(today.getSeconds()); // 45 (초)
console.log(today.getMilliseconds()); // 500 (밀리초)

const dayMapper = {
  0: function () {
    return '일요일';
  },
  1: function () {
    return '월요일';
  },
  2: function () {
    return '화요일';
  },
  3: function () {
    return '수요일';
  },
  4: function () {
    return '목요일';
  },
  5: function () {
    return '금요일';
  },
  6: function () {
    return '토요일';
  },
};

const day = today.getDay(); // 0 ~ 6

let result = null;
if (day in dayMapper) {
  result = dayMapper[day]();
}

console.log(`오늘은 ${result}입니다.`);
