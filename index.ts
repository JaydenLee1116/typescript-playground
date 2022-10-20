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

// function addThree(x?: number): number {
//   return x + 3;
// }

// function addFour(x: number | undefined): number {
//   return x + 4;
// }
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

// 더 엄격한 타입 지정 ex) 'jay'만 들어올 수 있는 타입
// 특정 글자나 숫자만 가질 수 있게 제한을 두는 것
// 이걸 literal types 라고 한다.
// 변수에 뭐가 들어올지 더 엄격하게 가능, 자동완성되는 점
let more: 'jay' | 'hodu';

more = 'hodu';

function func(a: 'hello'): 1 | 0 {
  return 1;
}

func('hello');

// 가위 바위 보 중 1개 입력가능
// 가위 바위 보만 들어올 수 있는 어레이를 리턴

type RSP = '가위' | '바위' | '보';
function rsp(x: RSP): RSP[] {
  return ['가위', '바위'];
}

rsp('가위');

// const 변수의 한계
var data = {
  name: 'kim',
  age: 31,
} as const;

// as const를 사용하면 객체 내의 모든 키가 readonly가 되면서 자료 형태가 값이 된다.
// 위의 경우 data.name의 자료 타입이 'kim'이 되면서 readonly가 된다.

function my(a: 'kim') {}

my(data.name); // data.name의 자료 형태가 'kim'이 되어서 에러가 안나는 모습

// type alias에 함수 타입 저장해서 사용하는 법
type Func3 = (a: string) => number;

let func3: Func3 = function () {
  return 1;
};

// object 내부의 함수(메서드) 타입 지정하기
let members1: {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
} = {
  name: 'kim',
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};

type Rand = () => void;
const rand: Rand = () => {};

type CutZero = (x: string) => string;

const cutZero: CutZero = (x) => {
  if (x[0] === '0') {
    return x.slice(1, x.length);
  }
  return x;
};

type RemoveDash = (x: string) => number;

const removeDash: RemoveDash = (x) => {
  return Number(x.replaceAll('-', ''));
};

const final = (x: string, y: CutZero, z: RemoveDash): number => {
  return z(y(x));
};

console.log(final('010-1111-2222', cutZero, removeDash));

// TS로 돔 조작하는 방법

class Person1 {
  // 아래처럼 타입 지정해주는 게 포인트
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  func(a: number): number {
    return a + 1;
  }
}

let man1 = new Person1('jay');
let man2 = new Person1('hodu');

// interface => object는 type이 아니라 interface로 타입 지정해도 된다

// 1. type alias 를 이용한 방법
type Square = { color: string; width: number };
let square: Square = { color: 'tomato', width: 100 };

// 2. interface 사용 (약간 class 문법과 닮았음)
interface Square1 {
  color: string;
  width: number;
}
let square1: Square1 = { color: 'tomato', width: 100 };

// 중간 테스트 - interface로 타입 지정해보기
// type 키워드를 안쓰고 interface를 사용하는 이유!!!
interface Student {
  name: string;
}

// 이런 식으로 class 상속처럼 extends 사용 가능
interface Teacher extends Student {
  age: number;
}

let student: Student = { name: 'hodu' };
let teacher: Teacher = { name: 'jay', age: 31 };

// 사실 type alias도 비슷하게 가능
// &(intersection)을 사용 가능
// A & B -> A와 B를 둘 다 만족하는 타입을 만들어달라 -> 즉, extends와는 쪼금 다른 느낌임
type Animal = { name: string };
type Cat = { age: number } & Animal;

// type vs interface (중요한 차이점)
// interface는 중복선언 가능, type은 중복선언 불가능

interface Student1 {
  name: string;
}

interface Student1 {
  score: number;
}

// 중복선언하면 자동으로 extends가 되어 합쳐지는 느낌

// interface가 좀더 유연한 느낌
// 외부 라이브러리 같은 경우, interface를 많이 사용한다. 추후에 사용자가 알아서 타입을 수정해서 사용 가능하다.
