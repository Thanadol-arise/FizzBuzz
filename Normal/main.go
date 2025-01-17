package main

import "strconv"

func fizzBuzz(input int) string {
	if input%15 == 0 {
		return "FizzBuzz"
	}
	if input%5 == 0 {
		return "Buzz"
	}
	if input%3 == 0 {
		return "Fizz"
	}
	return strconv.Itoa(input)
}
