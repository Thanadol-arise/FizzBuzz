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

    test('input 11', () => {
        expect(fizzBuzz.calculate(11)).toBe('11');
    });

    test('input 12', () => {
        expect(fizzBuzz.calculate(12)).toBe('Fizz');
    });

    test('input 13', () => {
        expect(fizzBuzz.calculate(13)).toBe('13');
    });

    test('input 14', () => {
        expect(fizzBuzz.calculate(14)).toBe('14');
    });

    test('input 15', () => {
        expect(fizzBuzz.calculate(15)).toBe('FizzBuzz');
    });

    test('input 18', () => {
        expect(fizzBuzz.calculate(18)).toBe('Fizz');
    });

    test('input 20', () => {
        expect(fizzBuzz.calculate(20)).toBe('Buzz');
    });

    test('input 30', () => {
        expect(fizzBuzz.calculate(30)).toBe('FizzBuzz');
    });
});

