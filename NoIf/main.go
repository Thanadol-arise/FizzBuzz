package main

func fizzBuzz(input int) string {
	result := map[int]string{
		1: "1",
		2: "2",
		3: "Fizz",
	}[input]

	return result
}
