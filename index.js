const fac = n => {
  if (n === 0) return 1
  x = fac(n - 1);
  y = n * x;
  return y;
}

console.log(fac(3))