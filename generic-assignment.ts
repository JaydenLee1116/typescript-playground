function printLength<T extends string | []>(x: T): number {
  return x.length;
}

interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function parseJson<T extends Animal>(data: string): T {
  return JSON.parse(data);
}

export {};

class Person<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a = new Person<string>('어쩌구');
a.name;
