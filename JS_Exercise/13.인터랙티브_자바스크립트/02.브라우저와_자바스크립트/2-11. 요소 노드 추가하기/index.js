// 요소 노드 추가하기 실습
const list = document.querySelector('#shopping-list');

const target = document.querySelector('#target-item');

const newItem = document.createElement('li');
newItem.textContent = '물';

// 맨 앞에 추가
// list.prepend(newItem);

// 맨 뒤에 추가
// list.append(newItem);

// 특정 요소 앞에다가 추가하기
target.before(newItem);

// 특정 요소 뒤에다가 추가하기
target.after(newItem);

const item1 = document.createElement('li');
item1.textContent = '우유';

const item2 = document.createElement('li');
item2.textContent = '빵';

const item3 = document.createElement('li');
item3.textContent = '계란';

// list.append(item1, item2, item3);
list.prepend(item1, item2, item3);
