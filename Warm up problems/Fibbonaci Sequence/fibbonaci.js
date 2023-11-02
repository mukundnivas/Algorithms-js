const fibbonaci = (n) => {
  const fib = [0, 1];

  for (let i = 2; i <= n - 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

module.exports = fibbonaci;
