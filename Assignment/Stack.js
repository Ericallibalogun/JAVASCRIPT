class Stack {
    constructor() {
        this.array = new Array(size);
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    push(item) {
        if (this.count >= this.array.length) {
            this.exception();
        }
        this.array[this.count] = item;
        this.count++;
    }

    exception() {
        throw new Error("Stack is full");
    }

    exceptionError2() {
        throw new Error("Stack is empty");
    }

    pop() {
        if (this.count === 0) {
            this.exceptionError2();
        }
        this.count--;
    }

    peek() {
        if (this.count === 0) {
            this.exceptionError2();
        }
        return this.array[this.count - 1];
    }

    length() {
        return this.count;
    }
}

module.exports = Stack;