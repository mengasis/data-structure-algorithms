// F(n) = F(n-1) + F(n-2)
// R: 1 1 2 3 5 8 13 21 34 55...

// O(n)
function simpleSolution(num) {
  let a = 0,
    b = 1,
    aux

  while (num >= 0) {
    aux = a
    a = b
    b = aux + b
    num--
  }

  return a
}

//O(2^n)
function recursiveSolution(num) {
  return num <= 1 ? 1 : recursiveSolution(num - 1) + recursiveSolution(num - 2)
}

for (let index = 0; index < 10; index++) {
  console.log(simpleSolution(index))
}
