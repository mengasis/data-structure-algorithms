const {
  iterativeSolution,
  recursiveSolution,
  memoSolution,
  genSolution
} = require('../src/algorithms/series/factorial')

describe('Factorial', () => {
  test('Iterative', () => {
    expect(iterativeSolution(0)).toEqual(1)
    expect(iterativeSolution(1)).toEqual(1)
    expect(iterativeSolution(2)).toEqual(2)
    expect(iterativeSolution(3)).toEqual(6)
    expect(iterativeSolution(4)).toEqual(24)
    expect(iterativeSolution(5)).toEqual(120)
  })
  test('Recursive', () => {
    expect(recursiveSolution(0)).toEqual(1)
    expect(recursiveSolution(1)).toEqual(1)
    expect(recursiveSolution(2)).toEqual(2)
    expect(recursiveSolution(3)).toEqual(6)
    expect(recursiveSolution(4)).toEqual(24)
    expect(recursiveSolution(5)).toEqual(120)
  })
  test('Clousure recursive with memoization', () => {
    expect(memoSolution()(0)).toEqual(1)
    expect(memoSolution()(1)).toEqual(1)
    expect(memoSolution()(2)).toEqual(2)
    expect(memoSolution()(3)).toEqual(6)
    expect(memoSolution()(4)).toEqual(24)
    expect(memoSolution()(5)).toEqual(120)
  })
  test('Generators', () => {
    const factorial = n => [...genSolution(n)].pop() || 1

    expect(factorial(0)).toEqual(1)
    expect(factorial(1)).toEqual(1)
    expect(factorial(2)).toEqual(2)
    expect(factorial(3)).toEqual(6)
    expect(factorial(4)).toEqual(24)
    expect(factorial(5)).toEqual(120)
  })
})
