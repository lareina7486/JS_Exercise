/**
 * Naming Conventions
 * 
 * 1. 영어(라틴문자) 사용, 문자와 숫자 사용 가능
 * 2. 특수기호는 _와 $만 사용 가능
 * 3. 숫자로 시작 불가
 * 4. 키워드는 변수명으로 사용 불가
 */

let code_factory = '코드팩토리';
var $ive = '아이브';
const _yuJin = '안유진';

console.log(code_factory);
console.log($ive); // jQuery에서 DOM요소 표시할때 사용. 요즘엔 안씀
console.log(_yuJin); // 내부 전용 변수, 사용하지 않는 변수에 가끔 사용

/**
 * 1. camleCase: 대부분의 언어에서 가장 많이 사용, JS 변수명, CSS Modules
 * 2. snake_case: 소문자로 쓰고, _로 구분 / 파이썬, 파일 이름
 * 3. PascalCase: C# 계열 언어, React 컴포넌트
 * 4. kebab-case: 일반 CSS
 */