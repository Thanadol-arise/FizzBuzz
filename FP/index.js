function buzzCheck(input){
    return input == 5 ? 'Buzz' : String(input);
}

function fizzBuzzCalculate(input){
    return input == 3 ? 'Fizz' : buzzCheck(input);
}

module.exports = fizzBuzzCalculate;