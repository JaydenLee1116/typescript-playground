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

export {};
