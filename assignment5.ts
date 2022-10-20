type first = { a: string; b: number };
type second = { c: number; a: any };
type third = first & second;

let x: third = { a: '123', b: 1, c: 3 };

type another = { color?: string; size: number; readonly position: number[] };

type answer = { name: string; phone: number; email: string };

export {};
