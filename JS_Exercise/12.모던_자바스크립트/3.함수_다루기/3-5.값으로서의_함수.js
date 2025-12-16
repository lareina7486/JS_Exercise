function greet() {
  console.log('안녕하세요!');
}

console.log(typeof greet); // function

console.log(greet.name); // "greet"
console.log(greet.length); // 0 (파라미터 개수)
console.log(greet.constructor); // [Function: Function]

// 콜백 함수
// type (x: number, y: () => void, z: () => void)
function checkAnswer(answer, onCorrect, onWrong) {
  const correctAnswer = 7;

  if (answer === correctAnswer) {
    onCorrect(answer);
  } else {
    onWrong(answer);
  }
}

// type (x: number) => void
function handleCorrect(answer) {
  console.log(`입력하신 ${answer}은 정답입니다!`);
}

// type (x: number) => void
function handleWrong(answer) {
  console.log(`입력하신 ${answer}은 오답입니다!`);
}

checkAnswer(7, handleCorrect, handleWrong);
checkAnswer(3, handleCorrect, handleWrong);
