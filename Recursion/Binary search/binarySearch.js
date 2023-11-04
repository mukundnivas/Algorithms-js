const binarySearch = (searchArray, element) => {
  if (searchArray.length < 2 && searchArray[0] != element) {
    return false;
  } else if (searchArray[0] === element) {
    return true;
  }

  searchArray.shift();
  return binarySearch(searchArray, element);
};

module.exports = binarySearch;
