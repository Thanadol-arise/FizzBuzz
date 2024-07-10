package main

import "testing"

func TestInput1(t *testing.T) {
	given := 1
	expected := "1"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput2(t *testing.T) {
	given := 2
	expected := "2"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput3(t *testing.T) {
	given := 3
	expected := "Fizz"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}
