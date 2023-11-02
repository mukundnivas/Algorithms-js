const isPowerOfTwo = (n) => {
  if (n < 1 || n % 2 !== 0) {
    return false;
  }

  for (let i = n; i >= 2; i /= 2) {
    if (i === 2) {
      return true;
    }
  }

  return false;
};

module.exports = isPowerOfTwo;
