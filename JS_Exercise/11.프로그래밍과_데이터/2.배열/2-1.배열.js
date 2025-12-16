// 객체로 표현하는 순위
const movieRankingByObj = {
  '1st': '인터스텔라',
  '2nd': '인셉션',
  '3rd': '다크나이트',
  '4th': '어벤져스',
};

const movieRankingByArray = ['인터스텔라', '인셉션', '다크나이트', '어벤져스'];

// element = '인터스텔라', '인셉션', '다크나이트', '어벤져스'

const fruits = ['사과', '포도', '바나나'];

console.log(fruits[0]); // 사과
console.log(fruits[1]); // 포도
console.log(fruits[2]); // 바나나
console.log(fruits[3]); // undefined

console.log(fruits[2 - 1]); // 포도
console.log(fruits[1 + 1]); // 바나나
