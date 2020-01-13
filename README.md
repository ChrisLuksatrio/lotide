# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @christoluksatrio/lotide`

**Require it:**

`const _ = require('@christoluksatrio/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

head(arr) : Returns the first item in an array

tail(arr) : Returns all the items in an array except for the first item

middle(arr) : Takes array and returns value of middle-most element of array

findKey(obj, callback) : Takes in an object and finds the key of the object specified in your calback

findKeyBy(obj, value) : Takes in an object and finds a key specified by a value

flatten(arr) : Flattens an array

letterPositions(string) : Takes in a string and returns an object containing the positions of all the letters inside the string

countLetters(string) : Takes in a string and counts all the letters inside the string

map(arr, callback) : Takes in an array and returns a new array that contains items from the inputted array modified through the callback

takeUntil(arr, callback) : Takes in an array and returns a slice of the array with elements taken from the beginning specified by an array

countOnly(items, obj) : Takes in an array and returns an object containing a count of items specified an inputted object

without(array, array2) : Takes in an array and removes multiple objects within the array specified by array2 and returns a new array
