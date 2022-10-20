let engName = 'jayden';
let age = 31;
let isColored = true;
let nothing = undefined;
let names = ['lee', 'kim'];
let members = {
    member1: 'kim',
    member2: 'lee',
};
let str = 'str';
// Union type
let temp = 123;
temp = '123';
let numbers = [1, '2', 3];
let obj = { a: 123 };
// any -> 타입스크립트를 사용하는 의미가 없어짐(가급적 사용하지 말자) -> 타입을 없앤다는 의미로 이해하자.(일반 JS 변수를 만들겠다는 의미랑 똑같다.)
let thing = 1234;
// unknown -> any랑 거의 비슷한데 any보다 좀더 안전하다.
let thing2 = 12345;
let test = thing;
// let test2 :string =thing2; // 이렇게 언노운은 할당 안된다.
// thing2 - 1 이것도 에러난다. 언노운은 넘버가 아니기에 연산 안된다.
let age1;
// age1 + 1; 문자로도, 숫자로도 다른 결과값으로서 계산이 되기 때문에 에러가 발생(둘 중 하나 결정을 해줘야한다.)
// 타입스크립트는 언제나 엄격하다는 것을 늘 기억하자(깐깐한 녀석임)
