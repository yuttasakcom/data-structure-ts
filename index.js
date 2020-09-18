const fib = x => {
  f1 = 1
  f2 = 1
  fN = 0

  for (let i=2; i <= x; i++) {
    fN = f1 + f2
    f2 = f1
    f1 = fN
  }

  return fN
}

console.log(fib(100))