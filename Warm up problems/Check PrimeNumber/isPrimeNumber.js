const isPrimeNumber = (n) => {
  if (n < 2) {
    return false;
  }

  for (i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = isPrimeNumber;
