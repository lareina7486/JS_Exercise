// type (x: string) => void
function printMenu(menu) {
  console.log(menu);
}

printMenu('아메리카노');
printMenu();

// type (menu: string, size: string | undefined) => void
function orderDrink(menu, size = 'regular', sugar = 1) {
  console.log(`${menu} ${size} 사이즈 주문 완료!, 설탕 ${sugar}개 추가`);
}

orderDrink('아메리카노', 'large');
orderDrink('카페라떼');
