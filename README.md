# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vmugoa/lotide`

**Require it:**

`const _ = require('@vmugoa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Function to return the first element of an input array. Takes an array as a param and returns element at index 0
* `tail(array)`: Function to return a new array with all elements except the first. Takes an array as a parameter and returns a new array starting from index 1 to the end.
* `middle(array)`: Function to return the middle element(s) of an array. Takes an array as a parameter and returns a new array with the middle element(s) of the input array. If the input array has an odd length, a single middle element is returned. If the input array has an even length, two middle elements are returned.
* `eqArrays(array1, array2)`: Function to check if two arrays are equal. Takes two arrays as parameters and returns a boolean value indicating whether the two arrays are equal in terms of their elements and order.
* `assertEqual(actual, expected)`: Function to assert if two values are equal. Takes two values as parameters and logs a message indicating whether they are equal or not.
* `assertObjectsEqual(actual, expected)`: Function to assert if two objects are equal. Takes two objects as parameters and logs a message indicating whether they are equal or not.
* `countLetters(sentence)`: Function to count the occurrences of each letter in a sentence (string). Takes a string as a parameter and returns an object with the count of each letter.
* `countOnly(allItems, itemsToCount)`: Function to count occurrences of specific elements in an array based on a given object. Takes an array of all items and an object specifying which items to count. Returns an object with the count of each specified item.
* `assertArraysEqual(array1, array2)`: Function to assert if two arrays are equal. Takes two arrays as parameters and logs a message indicating whether they are equal or not.
* `eqObjects(object1, object2)`: Function to check if two objects are equal. Takes two objects as parameters and returns a boolean value indicating whether the two objects are equal in terms of their keys and values.
* `findKey(object, callback)`: Function to retrieve the key of a value in an object based on a callback function. Takes an object and a callback function as parameters. Returns the first key in the object for which the callback function returns a truthy value, or undefined if no such key is found.
* `findKeyByValue(object, value)`: Function to retrieve the key of a value in an object. Takes an object and a value as parameters. Returns the first key in the object that matches the specified value, or undefined if no such key is found.
* `flatten(array)`: Function to flatten a nested array into a single level array. Takes a nested array as a parameter and returns a new array with all the elements flattened into a single level.
* `letterPositions(sentence)`: Function to return the indices of each letter in a sentence (string). Takes a string as a parameter and returns an object where each key is a letter in the string, and the corresponding value is an array of indices where the letter occurs.
* `map(array, callback)`: Function to transform the elements of an array based on a callback function. Takes an array and a callback function as parameters. Returns a new array with the results of applying the callback function to each element of the input array.
* `takeUntil(array, callback)`: Function to return a new array with elements until a specified condition is met. Takes an array and a callback function as parameters. Returns a new array containing the elements of the input array until the callback function returns a truthy value.
* `without(source, itemsToRemove)`: Function to return a new array with specified elements removed. Takes a source array and an array of items to remove as parameters. Returns a new array with all occurrences of the items to remove removed from the source array.