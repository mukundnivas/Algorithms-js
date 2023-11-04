const palindrome = (word) => {
  word = word.toLowerCase();
  if (word.length < 2) {
    return true;
  } else if (word[0] == word[word.length - 1]) {
    return palindrome(word.slice(0 + 1, word.length - 1));
  }

  return false;
};

module.exports = palindrome;
