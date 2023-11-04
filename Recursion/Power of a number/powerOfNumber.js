const powerOfNumber = (b, e) => {
  if (e === 1) {
    return b;
  }

  return b * powerOfNumber(b, e - 1);
};

module.exports = powerOfNumber;
