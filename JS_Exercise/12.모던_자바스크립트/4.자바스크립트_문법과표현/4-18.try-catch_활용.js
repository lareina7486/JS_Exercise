// type (x: string[]) => void
function printTeamMembers(members) {
  try {
    for (let member of members) {
      console.log(member);
    }
  } catch (error) {
    console.error(error);
    console.log(`${error.name}이 발생했습니다.`);
  }
}

const teamA = ['숙희', '현제', '은혜', '은결', '수훈'];
const teamB = { name: '영서', year: 2025 };
const teamC = ['석우', '에스더', '민성', '규량', '한준'];

printTeamMembers(teamA);
printTeamMembers(teamB);
printTeamMembers(teamC);

const tasks = [
  () => console.log('작업 1 완료'),
  () => console.log('작업 2 완료'),
  () => {
    throw new Error('작업 3 실패');
  },
  () => {
    console.log('작업 4 완료');
  },
];

for (let task of tasks) {
  try {
    task();
  } catch (error) {
    console.error(error);
  }
}
