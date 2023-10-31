const factorial = (n) => {
  let nfactorial = 1;
  if (n === 0) {
    return n;
  } else if (n < 0) {
    return "Not defined";
  }

  for (i = 1; i < n + 1; i++) {
    nfactorial = nfactorial * i;
  }

  return nfactorial;
};

module.exports = factorial;
