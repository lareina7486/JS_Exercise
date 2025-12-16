function double(x) {
  return x * 2;
}

console.log(double(5));

const double2 = function (x) {
  return x * 2;
};

console.log(double2(5));

const double3 = (x) => {
  return x * 2;
};

console.log(double3(5));

const double4 = (x) => x * 2;

console.log(double4(5));

// const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const divide = (x, y) => x / y;

const getStudent = function (name) {
  return {
    이름: name,
  };
};

const student = getStudent('성민');
console.log(student);

const getStudent2 = (name) => {
  return {
    이름: name,
  };
};

console.log(getStudent2('규량'));

const getStudent3 = (name) => ({
  이름: name,
});

console.log(getStudent3('수훈'));

const getStudents = (...xs) => xs;
console.log(getStudents('수훈', '주형', '민성', '영서', '미주'));

const add = (x) => (y) => x + y;

const add5 = add(5);

const result = add5(3);
console.log(result);

function createButton(buttonText) {
  let clickCount = 0;
  return {
    text: buttonText,
    click() {
      clickCount++;
    },
    log() {
      console.log(`${this.text} 버튼이 ${clickCount}번 클릭 되었습니다.`);
    },
  };
}

const submitButton = createButton('제출');
submitButton.click();
submitButton.log();
submitButton.click();
submitButton.click();
submitButton.log();

const cancelButton = createButton('취소');
cancelButton.click();
cancelButton.log();
