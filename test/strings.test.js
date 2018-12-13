const strings = require('../src/algorithms/strings')

describe('String Reversal', () => {
  test('Should reverse string', () => {
    expect(strings.reverse('Hello World!')).toEqual('!dlroW olleH')
  })
})

describe('Palindrome', () => {
  test('Should return true', () => {
    expect(strings.isPalindrome('Cigar? Toss it in a can. It is so tragic')).toBeTruthy()
  })
  test('Should return false', () => {
    expect(strings.isPalindrome('Cut the Gordian knot')).not.toBeTruthy()
  })
})

describe('Max Character', () => {
  test('Given a string of characters, should return the character that appears the most often.', () => {
    expect(strings.getMaxCharacter('How are you?')).toEqual('o')
  })
})

describe('Anagram', () => {
  test('Should check if it is anagram', () => {
    expect(strings.isAnagram('The alias men', 'Alan Smithee')).toBeTruthy()
    expect(strings.isAnagram('hello world', 'world hello')).toBeTruthy()
    expect(strings.isAnagram('hola', 'holis')).not.toBeTruthy()
  })
})

describe('Count Vowels', () => {
  test('Should count vowels to string', () => {
    expect(strings.countVowels('hello world')).toEqual(3)
    expect(strings.countVowels('ooooaaahh!')).toEqual(7)
    expect(strings.countVowels('pfspfs')).toEqual(0)
  })
})
