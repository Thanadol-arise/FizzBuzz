class Fizzbuzz {
    calculate(input) {
        if (input%3 === 0) {
            return 'Fizz';
        }
        if (input%5 === 0) {
            return 'Buzz';
        }
        return String(input);
    }
}

module.exports = Fizzbuzz;