// index.test.js
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

    test('input 7', () => {
        expect(fizzBuzzCalculate(7)).toBe('7');
    });

    test('input 8', () => {
        expect(fizzBuzzCalculate(8)).toBe('8');
    });

    test('input 9', () => {
        expect(fizzBuzzCalculate(9)).toBe('Fizz');
    });

    test('input 10', () => {
        expect(fizzBuzzCalculate(10)).toBe('Buzz');
    });

    test('input 11', () => {
        expect(fizzBuzzCalculate(11)).toBe('11');
    });

    test('input 12', () => {
        expect(fizzBuzzCalculate(12)).toBe('Fizz');
    });

    test('input 13', () => {
        expect(fizzBuzzCalculate(13)).toBe('13');
    });

    test('input 14', () => {
        expect(fizzBuzzCalculate(14)).toBe('14');
    });

    test('input 15', () => {
        expect(fizzBuzzCalculate(15)).toBe('FizzBuzz');
    });

    test('input 18', () => {
        expect(fizzBuzzCalculate(18)).toBe('Fizz');
    });

    test('input 20', () => {
        expect(fizzBuzzCalculate(20)).toBe('Buzz');
    });

    test('input 30', () => {
        expect(fizzBuzzCalculate(30)).toBe('FizzBuzz');
    });
});

