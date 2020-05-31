# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adam-brendan/lotide`

**Require it:**

`const _ = require('@adam-brendan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: checks if two arrays are equal
* `assertEqual`: compares an actual input with expect output to make an assertion
* `assertObjectsEqual`: checks if two objects are equal
* `countLetters`: creates an object with the count of each letter in a string
* `countOnly`: counts the instances of given values in an array
* `eqArrays`: checks if two arrays are equal
* `eqObjects`: checks if two objects are equal
* `findKey`: finds the key of an object that corresponds to a callback
* `findKeyByValue`: finds the key of an object using a given value
* `flatten`: flattens a nested array to one level of depth
* `head`: returns the first value of an array
* `letterPositions`: returns the index values of all letters in a string
* `map`: a clone of javascript's map function
* `middle`: returns the middle value(s) of an array
* `tail`: returns an array with the first value removed
* `takeUntil`: prints each value of an array until a given condition is met
* `without`: take an array and removes a specific value