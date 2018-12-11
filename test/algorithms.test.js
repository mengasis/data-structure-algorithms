const { solutionOne } = require('../src/algorithms/reverseString')

describe('String Reversal', () => {
  test('Should reverse string', () => {
    expect(solutionOne('Hello World!')).toEqual('!dlroW olleH')
  })
})
