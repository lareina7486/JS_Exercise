// type User = {
//   name: string,
//   hasDog: boolean,
//   dog?: {
//     name: string,
//     breed: string,
//     info?: {
//
// },
//   },
// };

const user1 = {
  name: '동철',
  hasDog: true,
  dog: {
    name: '뽀둥이',
    breed: '시고르자브종',
    info: {
      memo: '메모',
    },
  },
};

const user2 = {
  name: '하림',
  hasDog: false,
};

// type (x: User) => void
function printUserDog(user) {
  console.log(user.dog?.info?.memo); // 옵셔널 체이닝
}

printUserDog(user1);
printUserDog(user2);
