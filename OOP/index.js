class Fizzbuzz {
    calculate(input) {
        if (input === 3) {
            return 'Fizz';
        }
        return String(input);
    }
}

module.exports = Fizzbuzz;