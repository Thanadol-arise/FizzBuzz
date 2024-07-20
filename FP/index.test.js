const fizzBuzzCalculate  = require('./index.js'); // Import your functions

describe('FizzBuzz', () => {
    test('input 1', () => {
        expect(fizzBuzzCalculate(1)).toBe('1');
    });

    test('input 2', () => {
        expect(fizzBuzzCalculate(2)).toBe('2');
    });

    test('input 3', () => {
        expect(fizzBuzzCalculate(3)).toBe('Fizz');
    });
    
    test('input 4', () => {
        expect(fizzBuzzCalculate(4)).toBe('4');
    });
});