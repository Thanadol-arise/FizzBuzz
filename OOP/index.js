class FizzBuzz {
    calculate(input) {
        if (input === 5) {
            return 'Buzz';
        }
        if (input === 3) {
            return 'Fizz';
        }
        return String(input);
    }
}

module.exports = FizzBuzz;