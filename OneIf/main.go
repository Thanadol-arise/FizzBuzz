package main

import "strconv"

func fizzBuzz(input int) string {
	result := ""
	result = map[int]string{
		3: "Fizz",
		5: "Buzz",
	}[input]
	if result == "" {
		return strconv.Itoa(input)
	}
	return result
}
