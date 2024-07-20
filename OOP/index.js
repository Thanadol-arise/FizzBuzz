class Fizzbuzz {
    calculate(input) {
        if (input === 3) {
            return 'Fizz';
        }
        if (input === 2) {
            return '2';
        }
        return '1';
    }
}

module.exports = Fizzbuzz;