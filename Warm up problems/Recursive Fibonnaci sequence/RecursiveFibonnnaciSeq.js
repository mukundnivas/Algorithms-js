const RecursiveFibonnnaciSeq = (n) => {
  if (n < 2) {
    return n;
  }

  return RecursiveFibonnnaciSeq(n - 1) + RecursiveFibonnnaciSeq(n - 2);
};

module.exports = RecursiveFibonnnaciSeq;
