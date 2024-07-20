function buzzCheck(input){
    return input%5 == 0 ? 'Buzz' : String(input);
}

function fizzBuzzCalculate(input){
    return input%3 == 0 ? 'Fizz' : buzzCheck(input);
}

module.exports = fizzBuzzCalculate;