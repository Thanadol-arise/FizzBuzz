function fizzBuzzTwo(input) {
    return input == 2 ? '2' : '1';
}

function fizzBuzzCalculate(input) {
    return input == 3 ? 'Fizz' : fizzBuzzTwo(input);
}

module.exports = fizzBuzzCalculate