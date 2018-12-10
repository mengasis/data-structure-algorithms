// 5! = 5 * 4 * 3 * 2 * 1

function simpleSolution(num) {
  let result = 1

  while (num > 0) {
    result = num * result
    num--
  }

  return result
}

function recursiveSolution(num) {
  return num <= 1 ? 1 : num * recursiveSolution(num - 1)
}

function memoSolution() {
  let cache = {}

  return function factorial(num) {
    if (num <= 1) return 1
    if (num in cache) return cache[num]

    const result = num * factorial(num - 1)
    cache[num] = result

    return result
  }
}

function* genSolution(num = 1) {
  if (num <= 1) return 1

  let result = num

  while (num > 1) {
    result = --num * result
    yield result
  }
}

const fac = [...genSolution(5)]

console.log(fac)
