const FizzBuzz = require('./index');

describe('FizzBuzz', () => {
    let fizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    test('input 1', () => {
        expect(fizzBuzz.calculate(1)).toBe('1');
    });

    test('input 2', () => {
        expect(fizzBuzz.calculate(2)).toBe('2');
    });

    test('input 3', () => {
        expect(fizzBuzz.calculate(3)).toBe('Fizz');
    });
});
