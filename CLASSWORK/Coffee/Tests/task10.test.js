
const { createMathOperations } = require('../task10');
describe('Math Operations', () => {
    let math;

    beforeEach(() => {
        math = createMathOperations(2, 6);
    });

    test('adds 2 and 6 to equal 8', () => {
        expect(math.add()).toBe(8);
    });

    test('subtracts 6 from 2 to equal -4', () => {
        expect(math.subtract()).toBe(-4);
    });

    test('divides 2 by 6 to equal approximately 0.333', () => {
        expect(math.divide()).toBeCloseTo(0.333, 3); // Using toBeCloseTo for floating point comparison
    });

    test('multiplies 2 and 6 to equal 12', () => {
        expect(math.multiply()).toBe(12);
    });
});
