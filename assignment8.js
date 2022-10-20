class Car {
    model;
    price;
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        console.log(this.price / 10);
        return this.price / 10;
    }
}
class Word {
    num;
    str;
    constructor(...arr) {
        this.num = [];
        this.str = [];
        arr.forEach((v) => {
            if (typeof v === 'string') {
                this.str.push(v);
            }
            else {
                this.num.push(v);
            }
        });
    }
}
const word = new Word(1, 2, '3', 'jay');
console.log(word.num);
