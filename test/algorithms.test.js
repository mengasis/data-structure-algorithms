const reverseString = require('../src/algorithms/reverseString')
const palindrome = require('../src/algorithms/palindrome')

describe('String Reversal', () => {
  test('Should reverse string', () => {
    expect(reverseString.solutionOne('Hello World!')).toEqual('!dlroW olleH')
  })
})

describe('Palindrome', () => {
  test('Should return true', () => {
    expect(
      palindrome.isPalindrome('Cigar? Toss it in a can. It is so tragic')
    ).toBeTruthy()
  })
  test('Should return false', () => {
    expect(palindrome.isPalindrome('Cut the Gordian knot')).not.toBeTruthy()
  })
})
