const isLinearSearch = (searchArray, element) => {
  for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === element) return true;
  }
  return false;
};

module.exports = isLinearSearch;
