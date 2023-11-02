const stringReverse = (word) => {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }

  return reversed;
};

module.exports = stringReverse;
