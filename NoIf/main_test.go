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
