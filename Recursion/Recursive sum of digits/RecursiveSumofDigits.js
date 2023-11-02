const sumOfDigits = (n) => {
  if (n < 10) return n;

  const lastDigit = n % 10;
  const remainingDigits = Math.floor(n / 10);
  return lastDigit + sumOfDigits(remainingDigits);
};

module.exports = sumOfDigits;
