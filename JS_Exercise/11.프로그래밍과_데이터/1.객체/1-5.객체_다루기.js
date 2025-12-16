const student = {
  name: '김성민',
  age: 17,
  grade: 2,
  school: '서울고등학교',
};

// 1. 객체 수정하기
console.log(student.grade); // 2
student.grade = 1;
console.log(student.grade);
student['grade'] = 3;
console.log(student.grade);

// 2. 객체 추가하기
console.log(student.classNumber);
student.classNumber = 5;
console.log(student.classNumber);

// 3. 객체 삭제하기
student.tempMemo = '임시 메모';
console.log(student.tempMemo);
delete student.tempMemo;
console.log(student.tempMemo); // undefined

// 프로퍼티 찾기, in 연산자
console.log(student.age !== undefined); // true
console.log(student.phone === undefined); // true

if (student.phone !== undefined) {
  student.phone = '010-1234-4567';
}

console.log('phone' in student);

if ('phone' in student) {
  delete student.phone;
}
