package main

import "strconv"

func fizzBuzz(input int) string {
	result := ""

	result += map[bool]string{
		true:  "Fizz",
		false: "",
	}[input%3 == 0]

	result += map[bool]string{
		true:  "Buzz",
		false: "",
	}[input%5 == 0]

	if result == "" {
		return strconv.Itoa(input)
	}

	return result
}
