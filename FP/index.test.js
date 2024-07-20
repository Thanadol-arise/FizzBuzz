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

    test('input 5', () => {
        expect(fizzBuzzCalculate(5)).toBe('Buzz');
    });

    test('input 6', () => {
        expect(fizzBuzzCalculate(6)).toBe('Fizz');
    });
});