function hello(name) {
    if (name) {
        console.log(`안녕하세요 ${name}`);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function printLength(value) {
    return String(value).length;
}
function calculateMarriagePercentage(income, hasHouse, charm) {
    const houseScore = hasHouse ? 500 : 0;
    const charmScore = charm === '상' ? 100 : 0;
    const finalScore = income + houseScore + charmScore;
    if (finalScore >= 600)
        return '결혼가능';
}
