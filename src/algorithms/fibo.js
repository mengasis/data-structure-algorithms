// F(n) = F(n-1) + F(n-2)
// R: 1 1 2 3 5 8 13 21 34 55...

// O(n)
function iterativeSolution(num) {
  let a = 0,
    b = 1,
    aux

  while (num > 0) {
    aux = a
    a = b
    b = aux + b
    num--
  }

  return a
}

//O(2^n)
function recursiveSolution(num) {
  return num < 1 ? num : recursiveSolution(num - 1) + recursiveSolution(num - 2)
}

function memoSolution(num, cache) {
  cache = cache || {}

  if (num <= 1) return num
  if (cache[num]) return cache[num]

  return memoSolution(num - 1, cache) + memoSolution(num - 2, cache)
}

function closureMemoSolution() {
  let cache = {}

  return function fib(num) {
    if (cache[num]) return cache[num]

    if (num <= 1) return num

    const result = fib(num - 1) + fib(num - 2)
    cache[num] = result

    return result
  }
}

module.exports = {
  iterativeSolution,
  recursiveSolution,
  memoSolution,
  closureMemoSolution
}
