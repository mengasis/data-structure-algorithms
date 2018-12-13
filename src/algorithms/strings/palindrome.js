function isPalindrome(string = '') {
  return (
    string.replace(/\W/g, '').toLowerCase() ===
    [...string]
      .reverse()
      .join('')
      .replace(/\W/g, '')
      .toLowerCase()
  )
}

module.exports = { isPalindrome }
