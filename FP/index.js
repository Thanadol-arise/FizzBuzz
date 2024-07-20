function buzzCheck(input) {
    return input%5 == 0 ? 'Buzz' : String(input);
}

function fizzCheck(input) {
    return input%3 == 0 ? 'Fizz' : buzzCheck(input);
}

function fizzBuzzCalculate(input) {
    return input%15 == 0 ? 'FizzBuzz' : fizzCheck(input);
}

module.exports = fizzBuzzCalculate