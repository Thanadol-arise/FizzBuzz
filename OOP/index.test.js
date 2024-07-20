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

    test('input 4', () => {
        expect(fizzBuzz.calculate(4)).toBe('4');
    });

    test('input 5', () => {
        expect(fizzBuzz.calculate(5)).toBe('Buzz');
    });

    test('input 6', () => {
        expect(fizzBuzz.calculate(6)).toBe('Fizz');
    });

    test('input 7', () => {
        expect(fizzBuzz.calculate(7)).toBe('7');
    });

    test('input 8', () => {
        expect(fizzBuzz.calculate(8)).toBe('8');
    });

    test('input 9', () => {
        expect(fizzBuzz.calculate(9)).toBe('Fizz');
    });

    test('input 10', () => {
        expect(fizzBuzz.calculate(10)).toBe('Buzz');
    });
});

