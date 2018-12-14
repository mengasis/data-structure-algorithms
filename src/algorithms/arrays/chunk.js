module.exports = (array = [], size = 0) => {
  if (size === 0) return array
  if (array.length <= size) return [array]

  let results = [...array]
  let count = parseInt(array.length / size)

  for (let i = 0; i < count; i++) {
    results.push(results.splice(0, size))
  }

  if (array.length % size > 0) results.push(results.splice(0, array.length % size))

  return results
}
