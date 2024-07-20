package main

import "strconv"

func fizzBuzz(input int) string {
	result := ""
	result = map[bool]string{
		true:  "Fizz",
		false: strconv.Itoa(input),
	}[input%3 == 0]

	result = map[bool]string{
		true:  "Buzz",
		false: result,
	}[input == 5]

	return result
}
