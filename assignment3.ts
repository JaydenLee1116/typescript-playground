function hello(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name}`);
  } else {
    console.log('이름이 없습니다.');
  }
}

function printLength(value: string | number): number {
  return String(value).length;
}

function calculateMarriagePercentage(
  income: number,
  hasHouse: boolean,
  charm: string
): string | void {
  const houseScore: number = hasHouse ? 500 : 0;
  const charmScore: number = charm === '상' ? 100 : 0;

  const finalScore: number = income + houseScore + charmScore;

  if (finalScore >= 600) return '결혼가능';
}
