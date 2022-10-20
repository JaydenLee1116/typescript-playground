"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cutZero = (x) => {
    if (x[0] === '0') {
        return x.slice(1, x.length);
    }
    return x;
};
const removeDash = (x) => {
    return Number(x.replaceAll('-', ''));
};
const final = (x, y, z) => {
    return z(y(x));
};
console.log(final('010-1111-2222', cutZero, removeDash));
