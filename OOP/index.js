class Fizzbuzz {
    calculate(input) {
        if (input === 3) {
            return 'Fizz';
        }
        if (input === 5) {
            return 'Buzz';
        }
        return String(input);
    }
}

module.exports = Fizzbuzz;