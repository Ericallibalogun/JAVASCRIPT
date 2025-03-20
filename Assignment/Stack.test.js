const Stack = require('./Stack.js');

describe('Stack Tests', () => {
    let myStack;

    beforeEach(() => {
        myStack = new Stack(2);
    });

    test('Test if the stack is empty', () => {
        expect(myStack.isEmpty()).toBe(true);
    });

    test('Test if item can be pushed to stack', () => {
        myStack.push(12345);
        myStack.push(56789);
        expect(myStack.isEmpty()).toBe(false);
    });

    test('Test stack is pushed to stack and throw exception when full', () => {
        myStack.push(12345);
        myStack.push(56789);
        expect(() => myStack.push(12345)).toThrow('Stack is full');
        expect(myStack.isEmpty()).toBe(false);
    });

    test('Test stack can push and pop', () => {
        myStack.push(12345);
        myStack.push(56789);
        myStack.pop();
        expect(myStack.isEmpty()).toBe(false);
    });

    test('Test stack can pop and show status', () => {
        myStack.push(12345);
        myStack.push(56789);
        myStack.pop();
        myStack.pop();
        expect(myStack.isEmpty()).toBe(true);
    });

    test('Test that stack can peek', () => {
        myStack.push(12345);
        myStack.push(56789);
        expect(myStack.peek()).toBe(56789);
    });

    test('Test Stack length when pushed', () => {
        myStack.push(12345);
        myStack.push(34567);
        expect(myStack.length()).toBe(2);
    });
});