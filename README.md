# Array Shuffle

This package provides a function that shuffles a copy of an array.

## Installation

```bash
npm i -s array-shuffle
```

## Usage

Simple use the `shuffle` function with an array:

```js
const shuffle = require('array-shuffle')

console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
// => returns [ 8, 4, 0, 9, 6, 2, 3, 5, 7, 1 ]
```

Or you can add `shuffle` function to the Array prototype for simplicity:

```js
const shuffle = require('array-shuffle')

Array.prototype.shuffle = function() {
  return shuffle(this)
}

console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle())
// => returns [ 1, 4, 2, 8, 6, 0, 9, 7, 3, 5 ]
```

## API

### shuffle(arr)

Randomizes the order of the elements in a given array. This function does not mutate the original array, it returns a shuffled copy of the array.

#### Parameters

- `arr`: The array to shuffle.

#### Return value

A shuffled copy of the arry.

#### Exceptions

Thows an `Error` ("Not an array") when `arr` is not an array.

## License

MIT license. Copyright ©2019.
