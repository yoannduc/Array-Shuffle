# arrandomize

This package provides a function that randomize items in a copy of an array.

## Installation

```bash
npm i -s arrandomize
```

## Usage

Simple use the `arrandomize` function with an array:

```js
const arrandomize = require('arrandomize')

console.log(arrandomize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
// => returns [ 8, 4, 0, 9, 6, 2, 3, 5, 7, 1 ]
```

Or you can add `arrandomize` function to the Array prototype for simplicity:

```js
const arrandomize = require('arrandomize')

Array.prototype.shuffle = function shuffle() {
  return arrandomize(this)
}

console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle())
// => returns [ 1, 4, 2, 8, 6, 0, 9, 7, 3, 5 ]
```

## API

### arrandomize(array)

Randomizes the order of the elements in a given array. This function does not mutate the original array, it returns a randomized copy of the array.

#### Parameters

- `array`: The array to randomize.

#### Return value

A randomized copy of the arry.

#### Exceptions

Thows an `Error` ("Not an array") when `array` is not an array.

## License

MIT license. Copyright ©2019.
