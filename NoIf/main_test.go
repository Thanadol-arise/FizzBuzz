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

func TestInput4(t *testing.T) {
	given := 4
	expected := "4"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput5(t *testing.T) {
	given := 5
	expected := "Buzz"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput6(t *testing.T) {
	given := 6
	expected := "Fizz"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput7(t *testing.T) {
	given := 7
	expected := "7"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput8(t *testing.T) {
	given := 8
	expected := "8"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput9(t *testing.T) {
	given := 9
	expected := "Fizz"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput10(t *testing.T) {
	given := 10
	expected := "Buzz"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput11(t *testing.T) {
	given := 11
	expected := "11"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput12(t *testing.T) {
	given := 12
	expected := "Fizz"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput13(t *testing.T) {
	given := 13
	expected := "13"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput14(t *testing.T) {
	given := 14
	expected := "14"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}

func TestInput15(t *testing.T) {
	given := 15
	expected := "FizzBuzz"

	actual := fizzBuzz(given)
	if actual != expected {
		t.Errorf("Expected %s but got %s", expected, actual)
	}
}
