//Return the character that appears the most often.

function getMaxCharacter(string = '') {
  let mapModa = {}

  for (const character of string.split('')) {
    if (character in mapModa) {
      mapModa[character] += 1
    } else {
      mapModa[character] = 1
    }
  }

  return Object.entries(mapModa).reduce((a, b) => {
    return b[1] > a[1] ? b : a
  })[0]
}

module.exports = { getMaxCharacter }
