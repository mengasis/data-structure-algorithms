const arrays = require('../src/algorithms/arrays')

describe('Array Chunking', () => {
  test('Should apply fragmentation of array', () => {
    expect(arrays.chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
    expect(arrays.chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]])
    expect(arrays.chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]])
    expect(arrays.chunk([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4])
    expect(arrays.chunk([], 0)).toEqual([])
  })
})
