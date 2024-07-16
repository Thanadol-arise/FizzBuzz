package main

import "strconv"

func fizzBuzz(input int) string {
	result := ""

	result += map[bool]string{
		true:  "Fizz",
		false: "",
	}[input%3 == 0]

	result += map[int]string{
		5: "Buzz",
	}[input]

	if result == "" {
		return strconv.Itoa(input)
	}

	return result
}
