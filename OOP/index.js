class FizzBuzz {
    calculate(input) {
        if (input%15 === 0) {
            return 'FizzBuzz';
        }
        if (input%5 === 0) {
            return 'Buzz';
        }
        if (input%3 === 0) {
            return 'Fizz';
        }
        return String(input);
    }
}

module.exports = FizzBuzz;