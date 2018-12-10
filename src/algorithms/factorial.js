// 5! = 5 * 4 * 3 * 2 * 1

function simpleSolution(num) {
  let result = 1

  while (num > 0) {
    result = num * result
    num--
  }

  return result
}
