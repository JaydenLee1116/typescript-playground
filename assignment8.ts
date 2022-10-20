class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    console.log(this.price / 10);
    return this.price / 10;
  }
}

class Word {
  num: number[];
  str: string[];
  constructor(...arr: (string | number)[]) {
    this.num = [];
    this.str = [];
    arr.forEach((v) => {
      if (typeof v === 'string') {
        this.str.push(v);
      } else {
        this.num.push(v);
      }
    });
  }
}

const word = new Word(1, 2, '3', 'jay');
console.log(word.num);
