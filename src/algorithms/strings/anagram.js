function isAnagram(original = '', modified = '') {
  const normalString = original
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')

  const reverseString = modified
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')

  return normalString === reverseString
}

module.exports = { isAnagram }
