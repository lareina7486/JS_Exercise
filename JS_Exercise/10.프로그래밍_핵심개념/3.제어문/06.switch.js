// switch (비교할_값) {
//   case 값1: {
//     // 값1 일때, 실행될 코드
//     break; // switch문을 빠져나온다.
//   }
//   case 값2: {
//     // 값2 일때, 실행될 코드
//     break; // switch문을 빠져나온다.
//   }
//   case 값3: {
//     // 값3 일때, 실행될 코드
//     // break; // switch문을 빠져나온다.
//   }
//   case 값4: {
//     // 값4 일때, 실행될 코드
//     break; // switch문을 빠져나온다.
//   }
//   default: {
//     // 비교할 값이 어떤 case도 일치하지 않을떄,
//     // default 선택사항
//   }
// }

const day = 3; // 1:월, 2:화, 3:수, 4:목, 5:금, 6:토, 7:일

switch (day) {
  case 1: {
    console.log('새로운 한 주를 시작해 보세요!');
    break;
  }
  case 2: {
    console.log('화요일은 운동하기 좋은 날!');
    break;
  }
  case 3: {
    console.log('수요일엔 문화생활 어떠세요?');
    break;
  }
  case 4: {
    console.log('목요일은 자기계발의 날!');
    break;
  }
  case 5: {
    console.log('불금! 친구들과 약속을 잡아보세요!');
    break;
  }
  case 6:
  case 7: {
    console.log('주말에는 푹 쉬세요!');
    break;
  }
  default: {
    console.log('유효하지 않은 요일입니다.');
  }
}
