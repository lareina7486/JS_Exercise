const text = 'hello world'; // 문자열
console.log(text.length);

// 문자열 일부만 가져오기 (.slice)
console.log(text.slice(0, 5)); // hello
console.log(text.slice(6));

// 대소문자 바꾸기
console.log(text.toUpperCase()); // 대문자
console.log(text.toLowerCase()); // 소문자

// 특정 글자 찾기
// type () => boolean
// type () => number

// type (searchString: string, position?: number | undefined) => boolean
console.log(text.includes('hello')); // true
console.log(text.includes('bye')); // false

// type (searchString: string, position?: number | undefined) => number
console.log(text.indexOf('hello')); // 0
console.log(text.indexOf('bye')); // -1
