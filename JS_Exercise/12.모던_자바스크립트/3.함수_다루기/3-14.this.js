const user1 = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Function 키워드를 사용하면 this 함수가 **호출될 때** 문맥을 가리켜요
console.log(user1.getFullName());

const user2 = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: () => {
    console.log('this', this);
    return `${this.firstName} ${this.lastName}`;
  },
};

// 화살표 함수에서 this는 **선언할 때** 문맥을 가리켜요
console.log(user2.getFullName());

const user = {
  name: '철수',
  friends: ['영희', '민수'],
  printFriend: function () {
    this.friends.forEach((friend) => {
      console.log(`${this.name}의 친구: ${friend}`);
    });
  },
};

user.printFriend();

// 메소드 내부에서 this -> 일반함수
// 콜백 함수 내부에서 this -> 화살표 함수를 사용한다.
