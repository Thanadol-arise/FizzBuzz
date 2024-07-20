class FizzBuzz {
    calculate(input) {
        if (input%3 === 0) {
            return 'Fizz';
        }
        if (input === 5) {
            return 'Buzz';
        }
        return String(input);
    }
}

module.exports = FizzBuzz;