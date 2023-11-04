const isPalindrome = (word) => {
  word = word.toLowerCase();
  const midIndex = Math.floor(word.length / 2);

  for (let i = 0; i <= midIndex; i++) {
    if (word[i] != word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
