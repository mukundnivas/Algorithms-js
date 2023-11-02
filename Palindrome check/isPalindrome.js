const isPalindrome = (word) => {
  word = word.toLowerCase();
  const midIndex = Math.floor(word.length / 2);
  const firstHalf = word.slice(0, midIndex);
  const secondHalf = word.slice(midIndex + 1);
  let palindromeHalf = "";

  for (let i = secondHalf.length - 1; i >= 0; i--) {
    palindromeHalf = palindromeHalf + secondHalf[i];
  }

  if (firstHalf == palindromeHalf) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;
