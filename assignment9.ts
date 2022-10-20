interface Thing {
  brand: string;
  serialNumber: number;
  model: string[];
}

let thing1: Thing = {
  brand: 'Samsung',
  serialNumber: 1360,
  model: ['TV', 'phone'],
};

interface Product {
  product: string;
  price: number;
}

let basket: Product[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

interface Product2 extends Product {
  card?: boolean;
}

let basket2: Product2[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
  { product: '청소기', price: 7000, card: false },
];

interface Example {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let example: Example = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a + b;
  },
};
