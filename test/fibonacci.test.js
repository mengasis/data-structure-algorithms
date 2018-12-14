const {
  iterativeSolution,
  recursiveSolution,
  memoSolution,
  closureMemoSolution
} = require('../src/algorithms/series/fibonacci')

describe('Fibonacci', () => {
  test('Iterative', () => {
    expect(iterativeSolution(5)).toEqual(5)
    expect(iterativeSolution(6)).toEqual(8)
    expect(iterativeSolution(1)).toEqual(1)
    expect(iterativeSolution(0)).toEqual(0)
    expect(iterativeSolution(2)).toEqual(1)
    expect(iterativeSolution(10)).toEqual(55)
  })
  test('Recursive', () => {
    expect(recursiveSolution(5)).toEqual(5)
    expect(recursiveSolution(6)).toEqual(8)
    expect(recursiveSolution(1)).toEqual(1)
    expect(recursiveSolution(0)).toEqual(0)
    expect(recursiveSolution(2)).toEqual(1)
    expect(recursiveSolution(10)).toEqual(55)
  })
  test('Recursive with memoization', () => {
    expect(memoSolution(5)).toEqual(5)
    expect(memoSolution(6)).toEqual(8)
    expect(memoSolution(1)).toEqual(1)
    expect(memoSolution(0)).toEqual(0)
    expect(memoSolution(2)).toEqual(1)
    expect(memoSolution(10)).toEqual(55)
  })
  test('Clousure recursive with memoization', () => {
    expect(closureMemoSolution()(5)).toEqual(5)
    expect(closureMemoSolution()(6)).toEqual(8)
    expect(closureMemoSolution()(1)).toEqual(1)
    expect(closureMemoSolution()(0)).toEqual(0)
    expect(closureMemoSolution()(2)).toEqual(1)
    expect(closureMemoSolution()(10)).toEqual(55)
  })
})
