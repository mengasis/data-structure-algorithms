function countVowels(string = '') {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return string
    .toLowerCase()
    .split('')
    .reduce((accumulator, current) => {
      if (vowels.includes(current)) return (accumulator += 1)

      return accumulator
    }, 0)
}

module.exports = { countVowels }
