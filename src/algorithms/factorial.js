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


