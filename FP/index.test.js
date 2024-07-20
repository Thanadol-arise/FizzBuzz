// index.test.js
const fizzBuzzCalculate  = require('./index.js'); // Import your functions

describe('FizzBuzz', () => {
    test('input 1', () => {
        expect(fizzBuzzCalculate(1)).toBe('1');
    });

    test('input 2', () => {
        expect(fizzBuzzCalculate(2)).toBe('2');
    });
});

