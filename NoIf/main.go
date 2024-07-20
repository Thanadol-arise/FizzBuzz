package main

import "strconv"

func fizzBuzz(input int) string {
	result := map[bool]string{
		true:  "Fizz",
		false: strconv.Itoa(input),
	}[input%3 == 0]

	result = map[bool]string{
		true:  "Buzz",
		false: result,
	}[input%5 == 0]

	result = map[bool]string{
		true:  "FizzBuzz",
		false: result,
	}[input%15 == 0]

	return result
}
