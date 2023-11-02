const recursiveFactorial = (n) => {
  if (n < 3) {
    return n;
  }
  return n * recursiveFactorial(n - 1);
};

module.exports = recursiveFactorial;
