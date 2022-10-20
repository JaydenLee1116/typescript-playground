let engName: string = 'jayden';
let age: number = 31;
let isColored: boolean = true;
let nothing: undefined = undefined;

let names: string[] = ['lee', 'kim'];
let members: { member1: string; member2: string } = {
  member1: 'kim',
  member2: 'lee',
};

let str = 'str';

// Union type
let temp: string | number = 123;
temp = '123';

let numbers: (number | string)[] = [1, '2', 3];
let obj: { a: string | number } = { a: 123 };

// any -> 타입스크립트를 사용하는 의미가 없어짐(가급적 사용하지 말자) -> 타입을 없앤다는 의미로 이해하자.(일반 JS 변수를 만들겠다는 의미랑 똑같다.)
let thing: any = 1234;

// unknown -> any랑 거의 비슷한데 any보다 좀더 안전하다.
let thing2: unknown = 12345;

let test: string = thing;
// let test2 :string =thing2; // 이렇게 언노운은 할당 안된다.
// thing2 - 1 이것도 에러난다. 언노운은 넘버가 아니기에 연산 안된다.

let age1: string | number;
// age1 + 1; 문자로도, 숫자로도 다른 결과값으로서 계산이 되기 때문에 에러가 발생(둘 중 하나 결정을 해줘야한다.)
// 타입스크립트는 언제나 엄격하다는 것을 늘 기억하자(깐깐한 녀석임)

// 함수의 변수에 타입 지정을 안하면 자동으로 any 타입이 지정된다.
function addTwo(x: number): number {
  return x + 2;
}

// 함수에서 어떤 값을 반환하지 않을 때 사용하는 타입 -> void

function noReturn(x: string): void {
  console.log(11);
  // return 11; 리턴을 하지 않는 함수에 대해서는 void 즉, 리턴하게 되면 에러를 내준다.
}

// addTwo(); 타입 지정한 매개 변수를 안넣으면 에러가 난다.
// 이럴 때, ?를 사용하면 된다.

function addThree(x?: number): number {
  return x + 3;
}

function addFour(x: number | undefined): number {
  return x + 4;
}
// x?와 x에 | undefined를 유니온으로 하는 거랑 같은 효과

// type이 하나로 확정되지 않았을 경우, type narrowing을 사용
// typeof가 아니라도, 타입을 하나로 확정 지어줄 수 있으면 전부 사용 가능
function test2(x: number | string) {
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + 1;
  }
}

// assertion 문법(타입을 변경해주는 게 아님을 기억하자) -> 평상시에는 자주 사용할 일이 없다.
function test32(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number; // x 타입을 number로 인식해줘라 -> 유니온 타입을 하나로 확정해줄 때 사용하는 것(실제 타입을 바꾸는 효과는 없다)
}

// 변수에 타입 할당(type alias)

type AnimalType = string | number | undefined;
let animal: AnimalType = 123;

type OtherType = { name: string; age: number };
let other: OtherType = { name: 'jay', age: 31 };

// object 내의 값을 바꿀 수 없도록 할 수 있다.
const region = { region: 'seoul' };

type Dog = { readonly name: string };
const dog: Dog = {
  name: 'hodu',
};
// readonly를 사용하면 객체 내의 값이 수정 불가
// hodu.name = 'hodumon'
// 실제로 js로 안바뀌는 건 아니고 실행은 되는데, ts 자체로 에러를 보여주는 것이다.(주의)

type Name = string;
type Age = number;
// 타입 변수를 아래와 같이 union 타입으로 합치는 것도 가능하다.
type Person = Name | Age;

// &로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };

// { x: number, y: number }을 만들기 위해서 아래와 같이 &를 사용한다. (각 object 내의 속성을 합쳐줄 때)
type Position = PositionX & PositionY;
let position: Position = { x: 10, y: 10 };

// 같은 이름의 type 변수는 재정의가 불가능하다!(기억)

export {};
