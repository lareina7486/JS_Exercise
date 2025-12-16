// 삼항 연산자
// 조건 ? 표현식1 : 표현식2;

const PASSING_SCORE = 70;

// type (x: number) => string
function checkExam(score) {
  return score >= 70 ? '합격 입니다.' : '불합격 입니다.';
}

function checkExamIf(score) {
  if (score >= PASSING_SCORE) {
    return '합격 입니다.';
  }
  return '불합격 입니다.';
}

const scores = [90, 50, 69, 70, 80, 45];

for (let score of scores) {
  const text = checkExam(score);
  console.log(text);
}

const temperature = 15;

const weather =
  temperature >= 25 ? '더워요' : temperature >= 10 ? '적당해요' : '추워요';

console.log(weather);
