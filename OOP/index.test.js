const FizzBuzz = require('./index');

describe('FizzBuzz', () => {
    let fizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    test('input 1', () => {
        expect(fizzBuzz.calculate(1)).toBe('1');
    });
});
