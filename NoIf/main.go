package main

import "strconv"

func fizzBuzz(input int) string {
	result := map[bool]string{
		true:  "Fizz",
		false: strconv.Itoa(input),
	}[input == 3]

	return result
}
